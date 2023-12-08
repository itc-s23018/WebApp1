const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')

const N = parseInt(lines[0], 10)
const cols = lines[1].split(',')
const select = cols.slice(0, N)
console.log(select.join('\n'))
