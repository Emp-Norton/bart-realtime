const express = require('express');
const bodyParser = require('body-parser');
const key = require('../config.js') //"MW9S-E7SL-26DU-VV8V"; // public key, doesn't need to be env var

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
	res.send('ok');
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT} ${key.key}`);
});
