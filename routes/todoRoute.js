//REQUIRING EXPRESS
const express = require('express');

//creating an instance for express router
const route = express.Router();

const Todo = require('../models/TodoSchema');

route.get('/', (req, res) => {
	res.send('welcome');
});

route.post('/add', (req, res) => {

    // access data from headers using req.body
	let title = req.body.title;
	let description = req.body.description;


    //create instance of todo mongo model
	const newTodo = new Todo({
		title: title,
		description: description,
	});


    //save data using save function of mongo model instance
	newTodo
		.save()
		.then((response) => {
			console.log(response);
			res.send(response);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = route;
