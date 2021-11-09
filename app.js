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

app.listen(app.get("port"), function () {
    console.log("Server started on port " + app.get("port"));
});


var DecisionTree = require('decision-tree');
/*var training_data = [
    {"color":"blue", "shape":"square", "liked":false},
    {"color":"red", "shape":"square", "liked":false},
    {"color":"blue", "shape":"circle", "liked":true},
    {"color":"red", "shape":"circle", "liked":true},
    {"color":"blue", "shape":"hexagon", "liked":false},
    {"color":"red", "shape":"hexagon", "liked":false},
    {"color":"yellow", "shape":"hexagon", "liked":true},
    {"color":"yellow", "shape":"circle", "liked":true}
];
var test_data = [
    {"color":"blue", "shape":"hexagon", "liked":false},
    {"color":"red", "shape":"hexagon", "liked":false},
    {"color":"yellow", "shape":"hexagon", "liked":true},
    {"color":"yellow", "shape":"circle", "liked":true}
];
var class_name = "liked";
var features = ["color", "shape"];
var dt = new DecisionTree(class_name, features);
dt.train(training_data);

var predicted_class = dt.predict({
    color: "blue",
    shape: "hexagon"
});
console.log("Prediction: ");
console.log(predicted_class);

var accuracy = dt.evaluate(test_data);
console.log("Accuracy: ");
console.log(accuracy);

var treeJson = dt.toJSON();
console.log(treeJson);*/

//Weather dataset

training_data = [
    { "outlook": "sunny", "temp": "hot", "humidity": "high", "windy": "false", "play": "no" },
    { "outlook": "sunny", "temp": "hot", "humidity": "high", "windy": "true", "play": "no" },
    { "outlook": "overcast", "temp": "hot", "humidity": "high", "windy": "false", "play": "yes" },
    { "outlook": "rainy", "temp": "mild", "humidity": "high", "windy": "false", "play": "yes" },
    { "outlook": "rainy", "temp": "cool", "humidity": "normal", "windy": "false", "play": "yes" },
    { "outlook": "rainy", "temp": "cool", "humidity": "normal", "windy": "true", "play": "no" },
    { "outlook": "overcast", "temp": "cool", "humidity": "normal", "windy": "true", "play": "yes" },
    { "outlook": "sunny", "temp": "mild", "humidity": "high", "windy": "false", "play": "no" },
    { "outlook": "sunny", "temp": "cool", "humidity": "normal", "windy": "false", "play": "yes" },
    { "outlook": "rainy", "temp": "mild", "humidity": "normal", "windy": "false", "play": "yes" },
    { "outlook": "sunny", "temp": "mild", "humidity": "normal", "windy": "true", "play": "yes" },
    { "outlook": "overcast", "temp": "mild", "humidity": "high", "windy": "true", "play": "yes" },
    { "outlook": "overcast", "temp": "hot", "humidity": "normal", "windy": "false", "play": "yes" },
    { "outlook": "rainy", "temp": "mild", "humidity": "high", "windy": "true", "play": "no" },
]
var testing_data = [

]

var class_name = "play";
var features = ["outlook", "temp", "humidity", "windy"];

var dt = new DecisionTree(class_name, features);
dt.train(training_data);

var predicted_class = dt.predict({
    outlook: "sunny",
    humidity: "normal"
});
console.log("Prediction: ");
console.log(predicted_class);

/*var accuracy = dt.evaluate(testing_data);
console.log("Accuracy: ");
console.log(accuracy);*/