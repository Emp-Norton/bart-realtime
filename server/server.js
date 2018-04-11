const express = require('express');
const bodyParser = require('body-parser');
const key = require('../config.js') //"MW9S-E7SL-26DU-VV8V"; // public key, doesn't need to be env var
const app = express();
const request = require('https');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
	res.send('ok');
});

app.get('/api/:station', (req, response) => {
	console.log(req.params.station)
	 let url = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=powl&key=MW9S-E7SL-26DU-VV8V&json=y`;
	 request.get(url, res => {
	 	let body = '';
	 	res.on('data', data => {
	 		body += data;;
	 	})
	 	res.on('end', () => {
	 		body = JSON.parse(body);
	 		response.send(body);
	 	})
	 })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT} ${key.key}`);
});
