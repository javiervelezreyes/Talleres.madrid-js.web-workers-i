let worker = new Worker ('01/worker.js')

worker.addEventListener ('message', function ({ data }) {
  console.log (data)
})

worker.postMessage ('hola')