var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var presenterschema = new Schema({
   
    Name      : String,
    Organization:String,
    Email    : String,
    phone     : Number

    question: String,
    choice_a:String,
    choice_b:String,
    choice_c:String,
    choice_d:String, 
});
 


module.exports = mongoose.model('presenter',presenterschema);