const fs = require("fs")
const express = require("express")

const app = express()

app.get("/", function(req, res) {
  try {
    fs.readFile("/index.html", function(er, data) {
      res.send(data)
    })
  }
  catch {
    res.send("No")
  }
})

app.get("/e", function(req, res) {
  fs.readFile("/index.html", function(er, data) {
    res.send(data)
  })
})

app.listen(80)
