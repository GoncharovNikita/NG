let Reader = require('./readers/')
let Parser = require('./parsers/')
let file = process.argv[2]

const Main = (bundle) => {
  process.argv.forEach((el) => {
    console.log(`El :: ${el}\n`);
  })
  // Reader(file).then(
  //   (success) => {
  //     Parser(success).then(
  //       (succ) => {
  //         console.log(succ);
  //       }
  //     )
  //   }
  // )
}
Main()
