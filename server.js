'use strict'

// const AV = require('leanengine')

// AV.init({
//   appId: "56o0sJnhaHVAknTJQu89GDb3-gzGzoHsz",
//   appKey: 'n05OwUJgpg7ve2rCdbdqe6VH',
// });

// Comment the following line if you do not want to use masterKey.
// AV.Cloud.useMasterKey()

const app = require('./app')

// Retrieves the port number from environment variable `LEANCLOUD_APP_PORT`.
// LeanEngine runtime will assign a port and set the environment variable automatically.
const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000)

app.listen(PORT, (err) => {
  console.log('Node app is running on port:', PORT)

  // Registers a global exception handler for uncaught exceptions.
  process.on('uncaughtException', err => {
    console.error('Caught exception:', err.stack)
  });
  process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack)
  })
})
