const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const [N, ...rest] = lines

for (const line of lines) {
  const strs = line.split(' ')
  for (const str of strs) {
    print(str)
  }
}
