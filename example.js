// this is pseudo code, showing an example of how
// the middleware should work on the basic level.
require('dotenv').config()
const express = require('express')
var isOracle = require('oracle-middleware')

const app = express()

// note the "isOracle(process.env.PRIVATE_KEY)" part.
// this would be all that is needed to make sure the
// oracle is functioning properly
app.get('/', isOracle(process.env.PRIVATE_KEY), async (req, res) => {
  const url = 'https://tinyurl.com/ycd3vbpa'
  const response = await fetch(url)
  const data = await response.json()
  res.json(data)
})

const port = 8080
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
})
