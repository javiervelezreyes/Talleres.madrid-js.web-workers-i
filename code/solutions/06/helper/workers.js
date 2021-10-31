const MESSAGE = 'message'
const TYPE    = { type: 'module' }


function Workers () {

  function worker (path) {
    let idx    = 0
    let OKs    = []
    let KOs    = []
    let worker = new Worker (path, TYPE)
    worker.addEventListener (MESSAGE, function ({ data }) {
      let { id    } = data
      let { value } = data
       value && OKs[id] (value)
      !value && KOs[id] (value)
    })

    let proxy = new Proxy (worker, {
      get (target, key) {
        return function (...args) {
          target.postMessage ({
            id : idx,
            key,
            args
          })
          return new Promise (function (ok, ko) {
            OKs[idx] = ok
            KOs[idx] = ko
            idx++
          })
        }
      }
    })
    return proxy
  }

  function client (self, Worker) {
    function connect () {
      let worker = Worker ()
      self.addEventListener (MESSAGE, async function ({ data }) {
        let { id   } = data
        let { key  } = data
        let { args } = data
        if (key in worker) {
          let value = await worker[key] (...args)
          self.postMessage ({
            id,
            value
          })
        }
      })
    }
    return { connect }
  }

  return {
    worker,
    client
  }
}

export default Workers ()