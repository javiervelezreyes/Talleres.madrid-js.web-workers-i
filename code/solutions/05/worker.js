import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'
import Waits   from './helper/waits.js'

let client = Workers.client (self)
let logger = Logger ('client > worker')

client.receive (async function (data) {
  let {id}   = data
  let {type} = data
  let {x}    = data
  let {y}    = data
  let value  = {
    add (x, y) { return x + y },
    sub (x, y) { return x - y },
    mul (x, y) { return x * y },
    div (x, y) { return x / y }
  }[type] (x, y)

  logger.info (`${type} (${x}, ${y})`)
  await Waits.sleep ()
  client.send ({ id, value })
})