const User = require('./client/config/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));


app.post('/user', (req, res) => {
	console.log(req.body);
	User.create(req.body, (err, data) => {
		console.log(data)
		res.send(data);
	});
})

app.listen(port);