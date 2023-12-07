const print = console.log
const stream = require('fs')
  .readFileSync('/data', 'utf8')
  .trim()
const lines = stream.split('\n')

const [N, ...rest] = lines
print(rest.join('\n'))
