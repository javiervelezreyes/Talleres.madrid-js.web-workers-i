import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

let worker = Workers.worker ('03/worker.js')
let logger = Logger ('worker > client')

worker.receive (logger.info)
worker.send ({
  type: 'mul',
  x : 3,
  y : 2
})