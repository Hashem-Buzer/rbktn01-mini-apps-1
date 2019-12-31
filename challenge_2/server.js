var express = require('express');
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 3000;
var path = require('path');
var app = express();

app.use(express.static('client'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json())

// app.use(urlencodedParser);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/index.html'));
});


app.post('/upload_json', urlencodedParser, (req, res) => {
	console.log('your text: ', req.body)
	res.json({ text: 'recieved' });
});

app.listen(PORT, () => console.log('lestening...'));

