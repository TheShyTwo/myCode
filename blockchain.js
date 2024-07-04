
const crypto = require('crypto')

const hashFunc = data => crypto.createHash('sha256').update(data).digest('hex')

function Transaction (from, to, amount) {
    this.from = from
    this.to = to
    this.amount = amount
}

class Block {
    constructor(prevHash, data) {
        this.prevHash = prevHash
        this.time = new Date()
        this.data = data
        this.hash = this.calculateHash()
        this.mine = 1
    }

    calculateHash() {
        return hashFunc(this.prevHash + this.time.toString +
             JSON.stringify(this.data) + this.mine)
    }

    mineBlock(dififcult) {
        while(!this.hash.startsWith('0'.repeat(dififcult))) {
            this.mine++
            this.hash = this.calculateHash()
        }
    }
}

class Blockchain {
    constructor(dififcult) {
        const initTranction = new Transaction('admin', 'admin', 0)
        const initBlock = new Block('0000', initTranction)
        this.chain = [initBlock]
        this.length = 1
        this.dififcult = dififcult
    }

    getLastBlock() {
        return this.chain[this.length - 1]
    }

    addBlock(data) {
        const lastBlock = this.getLastBlock()
        const newBlock = new Block(lastBlock.hash, data)
        console.log('start mining ...')
        console.time('mine')
        newBlock.mineBlock(this.dififcult)
        console.timeEnd('mine')
        this.chain.push(newBlock)
        this.length ++
    }

    isValid() {
        for (let i = 1; i < this.length; i++) {
            const currentBlock = this.chain[i]
            const prevBlock = this.chain[i - 1]
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }
            if (currentBlock.prevHash !== prevBlock.hash) {
                return false
            }
        }
        return true
    }
}

function hackBlockchain(blockchain, fakeData, idBlock, difficult) {
    blockchain.chain[idBlock].data = fakeData
    blockchain.chain[idBlock].hash = blockchain.chain[idBlock].calculateHash()
    blockchain.chain[idBlock].mine = 1
    blockchain.chain[idBlock].mineBlock(difficult)
    for (let i = idBlock + 1; i < blockchain.length; i++) {
        blockchain.chain[i].prevHash = blockchain.chain[i - 1].hash
        blockchain.chain[i].mine = 1
        blockchain.chain[i].hash = blockchain.chain[i].calculateHash()
        blockchain.chain[i].mineBlock(difficult)
    }
}

const btc = new Blockchain(4)

const transaction_1 = new Transaction('long', 'hai', 200)
const transaction_2 = new Transaction('son', 'manh', 300)
const transaction_3 = new Transaction('hai', 'thanh', 150)

const fakeTranction = new Transaction('long', 'hai', 100)

btc.addBlock(transaction_1)
btc.addBlock(transaction_2)
btc.addBlock(transaction_3)

console.log(btc.chain)
console.log(btc.isValid())

console.log('-'.repeat(20))
hackBlockchain(btc, fakeTranction, 1, 4)
console.log(btc.chain)
console.log(btc.isValid())
