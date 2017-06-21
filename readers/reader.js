let fs  =  require('fs')
let Promise = require('bluebird')


let Reader = (bundle) => {
  return new Promise((resolve, reject) => {
    if(engiFormatTester(bundle)) {
      fs.readFile(bundle, 'UTF-8', (error, success) => {
        resolve(success)
      })
    } else {
      reject('Here is no engi.')
    }
  })
}
let engiFormatTester = (file) => {
  return (/\w+.ng(\s|$)/).test(file)
}
module.exports = Reader
