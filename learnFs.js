const fs = require('fs')

const filePath = 'example.txt'

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(content)
})

const content = 'hello xin chao tat ca cac ban'

fs.writeFile(filePath, content, err => {
    if(err) {
        console.log(err)
    }
    console.log('done')
})