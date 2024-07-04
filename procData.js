const readline = require('readline')
const {add, subtract} = require('./math')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function inputData(name_var) {
    return new Promise(resolve => {
        rl.question(`enter ${name_var} = `, inputNum => {
            const num = parseInt(inputNum)
            resolve(num)
        })
    })
}

async function processData() {
    try {
        let a = await inputData('a')
        let b = await inputData('b')
        let sum = add(a, b)
        let diff = subtract(a, b)
        console.log(`add: ${a} - ${b} = ${sum}`)
        console.log(`subtract: ${a} - ${b} = ${diff}`)
    } catch(error) {
        console.log(error)
    } finally {
        rl.close()
        console.log('done')
    }
}

processData()