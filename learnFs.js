const fs = require('fs').promises

async function readAndWriteFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf-8')
        console.log('file content:', data)

        const newData = data.toUpperCase()
        await fs.writeFile('example.txt', newData)
        console.log('file has been writen');
    } catch (err) {
        console.log(err)
    } finally {
        console.log('done')
    }
}

readAndWriteFile()