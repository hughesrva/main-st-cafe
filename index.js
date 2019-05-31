var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/menu", function(req, res) {
  res.sendFile(__dirname + "/public/menu.html");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
