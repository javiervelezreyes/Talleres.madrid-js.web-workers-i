function Logger (agent) {


  function format (...msgs) { return `[${agent}] - ${msgs}`    }
  function log    (...msgs) { console.log   (format (...msgs)) }
  function debug  (...msgs) { console.debug (format (...msgs)) }
  function info   (...msgs) { console.info  (format (...msgs)) }
  function warn   (...msgs) { console.warn  (format (...msgs)) }
  function error  (...msgs) { console.error (format (...msgs)) }
  function fatal  (...msgs) { console.fatal (format (...msgs)) }

  return {
    log,
    debug,
    info,
    warn,
    error,
    fatal
  }
}

export default Logger