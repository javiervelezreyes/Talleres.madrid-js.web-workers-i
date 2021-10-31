import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

let worker = Workers.worker ('02/worker.js')
let logger = Logger ('worker > client')

worker.receive (logger.info)
worker.send ('hola')