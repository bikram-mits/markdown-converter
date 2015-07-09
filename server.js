var express = require('express');
var app = express();

//default view engine to ejs

app.set('view engine', 'ejs');

// folder to store assets /images/js files

app.use(express.static(__dirname+'/public'));

// routes

app.get('/',function(req, res){
	res.render('pad');
})

var port = process.env.PORT || 8001;
app.listen(port);
