import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

let worker = Workers.worker ('05/worker.js')
let logger = Logger ('worker > client')

