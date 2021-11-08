var express = require("express");
var path = require("path");

var routes = require("./routes");

var app = express();
app.set("port", 3000);

app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));


app.use(express.static(path.join(__dirname, 'views')));
app.set("view engine", "html");

app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});

