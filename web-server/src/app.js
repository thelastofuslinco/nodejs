const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    author: 'Lincoln Duarte'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    author: 'Lincoln Duarte'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    author: 'Lincoln Duarte'
  })
})

app.get('/weather', (req, res) => {
  res.send('weather')
})

app.listen(3000, (listen) => {
  console.log('http://localhost:3000/')
})
