/* eslint-disable no-console */
const express = require('express')

const app = express()
const port = 80

app.get('/bundle.js', (req, res) => res.sendFile(__dirname + '/bundle.js'))
app.use((req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, (error) => {
  if (error) {
    console.error(error)
    return
  }
  console.info(`==> 🌎  Open up http://localhost:${ port } in your browser.`)
})
