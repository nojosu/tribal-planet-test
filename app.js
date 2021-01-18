const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

// Use a static JSON file as our database (for now)
const file = './db.json'

const channels = require(file)

// API
app.get('/api/channels', (request, response) => {
    response.json(channels)
})

const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})