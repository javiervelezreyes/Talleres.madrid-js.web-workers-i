import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

(async function () {

  let worker = Workers.worker ('06/worker.js')
  let logger = Logger ('worker > client')

  let p1 = worker.mul (3, 2)
  let p2 = worker.add (3, 2)
  let p3 = worker.sub (3, 2)

  logger.info (await p1)
  logger.info (await p2)
  logger.info (await p3)

})()




