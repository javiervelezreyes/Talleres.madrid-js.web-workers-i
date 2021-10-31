import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'
import Waits   from './helper/waits.js'

let client = Workers.client (self, Worker)
let logger = Logger ('client > worker')

function Worker () {

  async function add (x, y) {
    await Waits.sleep ()
    return x + y
  }

  async function sub (x, y) {
    await Waits.sleep ()
    return x - y
  }

  async function mul (x, y) {
    await Waits.sleep ()
    return x * y
  }

  async function div (x, y) {
    await Waits.sleep ()
    return x / y
  }

  return {
    add,
    sub,
    mul,
    div
  }
}

client.connect ()

