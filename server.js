const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

//middleware function for body parser to access the data we get in a post or put request
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// require is used to require some file or installed module/library/package

const keys = require('./config/keys');

// connect with mongodb atlas using mongoose connect function

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	//to throw or catch the runtime error
	if (err) throw err;
	console.log(`mongodb connected`);
});

// ./ is current directory

const Home = require('./routes/todoRoute');

app.use('/', Home);

// to connect to the port on localhost
app.listen(PORT,() => console.log(`the server is running on port ${PORT}`));

//
