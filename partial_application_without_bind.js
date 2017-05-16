function logger(namespace) {
  return function(...params) {
    console.log.apply(console, [namespace].concat(params))
  }
}

module.exports = logger