const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const [A, B, C, D] = stream.split(' ')
print(((A + B) * C) ** 2 % D)
