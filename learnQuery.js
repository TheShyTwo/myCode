const querystring = require('querystring')

const str = 'name=Alice&age=25&city=New%20York'

const parsedQuery = querystring.parse(str, '&', '=')

console.log(parsedQuery)

const queryObject = {
    name: 'Tom Dwan',
    age: 25,
    city: 'WashintonDC'
}

const queryString = querystring.stringify(queryObject, ';', '-')
console.log(queryString)

const escapedString = querystring.escape('new york')
console.log(escapedString)

const unescapedString = querystring.unescape(escapedString)
console.log(unescapedString)