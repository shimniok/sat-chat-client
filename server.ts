const path = require("path");
const express = require("express");
const config = require("config");
const httpProxy = require("http-proxy");
const app = express();
const apiProxy = httpProxy.createProxyServer();

var apiUrl = config.get("apiUrl");

console.log("proxying requests to " + apiUrl);

app.use(express.static(__dirname + "/angular-build"));

//app.enable("trust proxy"); // trust proxy header
app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] === "http" && process.env.NODE_ENV === "production") {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});

app.all("/api/*", function (req, res) {
  console.log(req.headers.host + " " + req.method + " " + req.url);
  console.log(apiUrl + req.url);
  try {
    apiProxy.web(req, res, { target: apiUrl, changeOrigin: true });
  } catch (err) {
    console.log(err);
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "angular-build", "index.html"));
});

// Start the app by listening on the default Heroku port
var listener = app.listen(process.env.PORT || 4200, function () {
  console.log("Listening on port " + listener.address().port);
});
