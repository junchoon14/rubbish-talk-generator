const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_talk')
const app = express()
const port = 3000

const hbs = exphbs.create({
  helpers: {
    setChecked: function (value, careerValue) {
      return value == careerValue ? 'checked' : ''
    }
  },
  defaultLayout: 'main',
})

app.use(express.static('public'))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const career = req.body
  const talk = generateTalk(career)
  console.log('talk', talk, 'career', career)
  res.render('index', { talk: talk, career: career })
})

app.listen(port, () => {
  console.log(`This Express server is built on http://localhost:${port}`)
})