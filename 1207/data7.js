const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')

const [a, b, c] = lines

for (const line of lines) {
  const N = line.split(',')
  for (const numbers of N) {
    print(numbers)
  }
}
