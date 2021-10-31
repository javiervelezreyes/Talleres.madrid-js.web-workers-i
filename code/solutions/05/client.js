import Logger  from './helper/logger.js'
import Workers from './helper/workers.js'

let worker = Workers.worker ('05/worker.js')
let logger = Logger ('worker > client')

let Ops = [
  { type: 'mul', x: 3, y: 2 },
  { type: 'add', x: 3, y: 2 },
  { type: 'sub', x: 3, y: 2 },
]

let Ids = [
  worker.send (Ops[0]),
  worker.send (Ops[1]),
  worker.send (Ops[2]),
]

worker.receive (function ({ id, value }) {
  let idx    = Ids.find (x => x == id)
  let op     = Ops[idx]
  let {type} = op
  let {x}    = op
  let {y}    = op
  logger.info (`${type} (${x}, ${y}) = ${value}`)
})
