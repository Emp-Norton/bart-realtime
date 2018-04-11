const express = require('express');
const bodyParser = require('body-parser');
const key = require('../config.js') //"MW9S-E7SL-26DU-VV8V"; // public key, doesn't need to be env var
const $ = require('jquery');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
	res.send('ok');
});

app.get('/api', (req, res) => {
	 let url = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${origin}&key=MW9S-E7SL-26DU-VV8V&json=y`;
		$.ajax({
      type: 'GET',
      url: '/api',
      success: function(data) {
      	console.log(data)
        res.send(data)
      }, 
      failure: function(err) {
        console.log(err)
      }
   })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT} ${key.key}`);
});
