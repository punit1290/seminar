var express = require('express')
var app = express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var student = require('./models/presenter')
var subject = require('./models/user')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/');

app.get('/',function(req,res){
res.send('hello server')

})

app.post('/presenter',function(req,res){

	var Name = req.body.Name;
	var Organization = req.body.Organization;
	var Email = req.body.Email;
	var phone = req.body.phone;
	var question = req.body.question;
	var choice_a = req.body.choice_a;
	var choice_b = req.body.choice_b;
	var choice_c = req.body.choice_c;
	var choice_d = req.body.choice_d;

 
     var sub_pre = new subject()
       sub_pre.Name =Name;
       sub_pre.Organization =Organization;
       sub_pre.Email =Email;
	   sub_pre.phone =phone;
	   sub_pre.question =question;
	   sub_pre.choice_a =choice_a;
	   sub_pre.choice_b =choice_b;
	   sub_pre.choice_c =choice_c;
	   sub_pre.choice_d =choice_d;

	  

	   sub_reg.save(function(err){
	   	if(!err){
	   		res.send("subject is updated!")
	   	}else{
	   		res.send(err)
	   	}
	   })
})

/*	app.send('/',function(req,res) {
		res.send('hello server i am here')
	} ) */
	/*app.use(express.static(__dirname + '/view'));
    app.use(function (req, res) {
   res.sendFile(__dirname + '/view/index.html');
});*/

	app.listen(3000,function(err){
	if(!err){

	console.log("server running at 3000")
	}
	});