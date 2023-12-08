const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')

const [a, ...N] = lines

for (const line of lines) {
  const str = line.split(',')
  for (const strs of str) {
    print(strs)
  }
}
