const MESSAGE = 'message'
const TYPE    = { type: 'module' }


function Workers () {

  function worker (path) {
    let idx     = 0
    let worker  = new Worker (path, TYPE)
    worker.send = function (data) {
      worker.postMessage ({
        id: idx,
        ...data
      })
      return idx++
    }
    worker.receive = function (fn) {
      worker.addEventListener (MESSAGE, function ({ data }) {
        fn (data)
      })
    }
    return worker
  }

  function client (self) {
    self.send    = self.postMessage
    self.receive = function (fn) {
      self.addEventListener (MESSAGE, function ({ data }) {
        fn (data)
      })
    }
    return self
  }

  return {
    worker,
    client
  }
}

export default Workers ()