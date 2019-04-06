const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_talk')
const app = express()
const port = 3000

app.use(express.static('public'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const talk = generateTalk(req.body)
  res.render('index', { talk: talk })
})

app.listen(port, () => {
  console.log(`This Express server is built on http://localhost:${port}`)
})