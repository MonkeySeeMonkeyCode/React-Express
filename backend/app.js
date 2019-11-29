var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var apiRouter = require('./routes/apiRouter');

var app = express();
// db from notes project
var dev_db_url = 'mongodb+srv://Bmin:Bmin@cluster0-h1wp1.mongodb.net/test?retryWrites=true&w=majority';
// new react db to use later
// var dev_db_url = 'mongodb+srv://dbUser:dbUser@cluster-react-chnn3.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/src')));

// an api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ['item1', 'item2', 'item3'];
    res.json(list);
});

app.use('/api', apiRouter);

// handles any requests that doesnt match the one above
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/src/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('app is listening on port ' + port);