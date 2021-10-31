import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

let worker = Workers.worker ('04/worker.js')
let logger = Logger ('worker > client')

worker.receive (logger.info)
worker.send ({ type: 'mul', x : 3, y : 2 })
worker.send ({ type: 'add', x : 3, y : 2 })
worker.send ({ type: 'sub', x : 3, y : 2 })