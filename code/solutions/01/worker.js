self.addEventListener ('message', function ({ data }) {
  console.log ('[Worker] - ', data)
  postMessage ('adios')
})