function logger(namespace) {
  return function(...params) {
    console.log.apply(console.log, [namespace].concat(params))
  }
}

module.exports = logger