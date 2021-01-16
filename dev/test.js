const Blockchain = require('./blockchain')
const bitcoin = new Blockchain()

const bc1 = {
  chain: [
    { index: 1, timestamp: 1610818002407, transactions: [], nonce: 100, hash: '0', previousBlockHash: '0' },
    {
      index: 2,
      timestamp: 1610818212682,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: 'fc6605dabbe940a196c1aafc334115ea',
          transactionId: '550cf4bb9d4a47c1a6c0b5c053701320',
        },
        {
          amount: 12.5,
          sender: '00',
          recipient: 'fc6605dabbe940a196c1aafc334115ea',
          transactionId: '6af66cdb6d9d469584d7dd922da757d0',
        },
      ],
      nonce: 8612,
      hash: '00005065bec242d243e9c8b53654b166eb4d6cb34f66a0a3f0e7035b7fa446d6',
      previousBlockHash: '0',
    },
    {
      index: 3,
      timestamp: 1610818289118,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '6a2c746f69c644e3aad1279ad85a7941',
          transactionId: '9dbafc50115f4131b39567bb2eddf04d',
        },
      ],
      nonce: 34159,
      hash: '0000679f53c809eca9bf31710dc1970dc8edbe78d67df13e84882a70a2901058',
      previousBlockHash: '00005065bec242d243e9c8b53654b166eb4d6cb34f66a0a3f0e7035b7fa446d6',
    },
  ],
}

console.log('valid:', bitcoin.chainIsValid(bc1.chain))
