const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const [A, B, C] = stream.split(' ')
let N = 0

N += A
N *= B
N %= C

print(N)
