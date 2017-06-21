let Promise = require('bluebird')

let Parser = (bundle) => {
  return new Promise((resolve, reject) => {
    resolve(bundle)
  })
}

module.exports = Parser
