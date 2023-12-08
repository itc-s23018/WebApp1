const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const [A, B, C] = stream.split(' ')

const X = A * A
const Y = B * B * (C * C)

print(X, Y)
