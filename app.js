const fs = require("fs")
const express = require("express")

const app = express()

app.get("/", function(req, res) {
  try {
    res.setHeader("Content-Type", "text/html")
    fs.readFile("index.html", function(er, data) {
      res.send(data)
    })
  }
  catch {
    console.log("Err")
    res.send("No")
  }
})

app.get("/e", function(req, res) {
  fs.readFile("index.html", function(er, data) {
    res.send(data)
  })
  
})

app.listen(8080, function () {
  console.log("Listeningu")
}
  );


