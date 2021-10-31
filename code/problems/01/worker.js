self.addEventListener ('message', function ({ data }) {
  console.log (data)
  postMessage ('adios')
})