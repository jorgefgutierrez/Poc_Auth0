const express = require("express");
const app = express();
const path = require("path");

app.use("/", express.static(__dirname + "/"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const hostname = "76xww835x.codesandbox.io";
const port = 443;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
