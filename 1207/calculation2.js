const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split(' ')

const A = lines[0]
const B = lines[1]

const D = A - B
const P = A * B

print(D, P)
