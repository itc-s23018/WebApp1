const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const [a, b, c] = lines

print(a)
print(b)
print(c)
