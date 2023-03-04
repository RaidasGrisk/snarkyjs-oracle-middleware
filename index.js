require('dotenv').config()
const {
  isReady,
  PrivateKey,
  PublicKey,
  Field,
  Signature,
  CircuitString
} = require('snarkyjs')

const express = require('express')
const app = express()

const wrapAsOracle = (data) => {

  // config
  const PRIVATE_KEY = PrivateKey.fromBase58(process.env.PRIVATE_KEY)

  // loop over the json keys and values
  // and encode as proper snarkyJs objects
  // https://github.com/RaidasGrisk/zk-github-oracle/blob/general-purpose-oracle/index.js
  const data_ = Field('1')

  // https://docs.minaprotocol.com/zkapps/tutorials/oracle#response-format
  const publicKey = PRIVATE_KEY.toPublicKey()
  const signature = Signature.create(PRIVATE_KEY, [data_])
  return {
    data: {
      data
    },
    signature: signature,
    publicKey: publicKey,
  }
}

// a middlewere that modifies the response object
// by formatting the response according to oracle response format:
// https://docs.minaprotocol.com/zkapps/tutorials/oracle#response-format

// how to create a middlewere that modifies the response:
// https://stackoverflow.com/a/60817116
const middleware = (req, res, next) => {
  const oldSend = res.json
  res.json = function(data) {
    const data_ = wrapAsOracle(data)
    res.json = oldSend
    return res.json(data_)
  }
  next()
}

app.use(middleware)

app.get('/', (req, res) => {
  res.json({
    test: 1
  })
})

const port = 8080
app.listen(port, async () => {
  await isReady
  console.log(`Example app listening on port ${port}`)
})
