const path = require("path");
const express = require("express");
const config = require("config");
const httpProxy = require("http-proxy");
const app = express();
const apiProxy = httpProxy.createProxyServer();

var apiUrl = config.get("apiUrl");

console.log("proxying requests to "+apiUrl);

app.use(express.static(__dirname + "/angular-build"));

app.get("/api/*", function (req, res) {
  apiProxy.web(req, res, { target: apiUrl });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "angular-build", "index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
