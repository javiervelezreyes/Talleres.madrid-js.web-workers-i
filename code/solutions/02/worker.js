import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

let client = Workers.client (self)
let logger = Logger ('client > worker')

client.receive (function (data) {
  logger.info (data)
  client.send ('adios')
})