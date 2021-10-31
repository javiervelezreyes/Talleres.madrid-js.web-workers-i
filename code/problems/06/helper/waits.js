const MS = 700

function Waits () {

  function sleep (ms) {
    let delay = ms || Math.random () * MS | 0
    return new Promise (function (ok) {
      setTimeout (ok, delay)
    })
  }

  return { sleep }
}

export default Waits ()