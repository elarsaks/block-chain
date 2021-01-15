const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Blockchain = require('./blockchain')
const { v4: uuid } = require('uuid')
const port = process.argv[2]

const nodeAddress = uuid().split('-').join('')

const bitcoin = new Blockchain()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/blockchain', function (req, res) {
  res.send(bitcoin)
})

app.post('/transaction', function (req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
  res.send({ note: `Transaction will be added in block ${blockIndex}` })
})

app.get('/mine', function (req, res) {
  const lastBlock = bitcoin.getLastBlock()
  const previousBlockHash = lastBlock['hash']
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1,
  }
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData)
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce)

  bitcoin.createNewTransaction(12.5, '00', nodeAddress)

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash)
  res.json({
    note: 'New block mined successfully',
    block: newBlock,
  })
})

// register node and broadcast it to the network
app.post('register-and-broadcast-node', function (req, res) {
  const newNodeUrl = req.body.newNodeUrl
  if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1) {
    bitcoin.networkNodes.push(newNodeUrl)
  }

  bitcoin.networkNodes.forEach(networkNodeUrl => {
    // '/register-node'
    // Udemy video player broke down
  })
})

// register a node with network
app.post('register-node', function (req, res) {
  // ...
})

// register multiple nodes at once
app.post('register-nodes-bulk', function (req, res) {
  // ...
})

app.listen(port, function () {
  console.log(`Listening on port ${port}...`)
})
