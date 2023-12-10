const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const [A, B, C, D] = stream.split(' ')
print(((parseInt(A) + parseInt(B)) * parseInt(C)) ** 2 % parseInt(D))
