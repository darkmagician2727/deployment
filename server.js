const express = require('express')
const app = express()
app.listen(4000, () => console.log(`server running on 4000`))
app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '155c80a66fb340f58c267fc76317a2a4',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')