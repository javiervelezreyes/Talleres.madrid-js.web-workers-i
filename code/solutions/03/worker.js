import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

let client = Workers.client (self)
let logger = Logger ('client > worker')

client.receive (function (data) {
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
  client.send (value)
})