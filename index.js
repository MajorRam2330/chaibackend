 require('dotenv').config();
const express = require('express')

const app = express()

const port = 4000;

app.get('/',(req,res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
  res.send('hiteshdotcom')
})

app.get('/login',(req,res) => {
  res.send('<h1>Please Login to Chai Aur Code</h1>')
})

app.get('/youtube',(rep,res) => {
  res.send("Chai aur Code")
})
 app.listen(process.env.port, () => {
  console.log(`Example App listening to port ${port}`)
 })