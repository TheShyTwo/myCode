const { URL } = require('url');

const myURL = new URL('https://www.example.com/path?name=abc&age=30')

console.log(myURL.searchParams.get('name'))
console.log(myURL.searchParams.get('age'))

myURL.searchParams.append('city', 'new york')
console.log(myURL.href)

myURL.searchParams.delete('age')
console.log(myURL.href)

console.log(myURL.searchParams.has('name'))
console.log(myURL.searchParams.has('age'))

console.log(myURL.searchParams)