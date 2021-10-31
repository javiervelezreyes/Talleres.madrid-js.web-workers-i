import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'
import Waits   from './helper/waits.js'

let client = Workers.client (self, Worker)
let logger = Logger ('client > worker')


