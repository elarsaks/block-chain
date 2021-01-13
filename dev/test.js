const Blockchain = require('./blockchain')
const bitcoin = new Blockchain()

const previousBlockHash = 'SS7AFT78SDTA'
const currentBlockData = [
  {
    amount: 10,
    sender: '786DSFY7DS8H',
    recipient: '8D7S98GD7',
  },
  {
    amount: 30,
    sender: 'DSAGDFDFSG5E',
    recipient: 'WHFTHTCHFCHBFT5RS57EY4',
  },
  {
    amount: 24,
    sender: 'RTHSDR5TU5E87',
    recipient: 'S57S45',
  },
]
const nonce = 100

console.log(
  bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce)
)
