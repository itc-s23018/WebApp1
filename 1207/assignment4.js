const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const [A, B] = stream.split(' ')
let N = 10000

N /= A
N %= B

print(Math.floor(N))
