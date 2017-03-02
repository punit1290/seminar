var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var profileschema = new Schema({
   
    Name      : String,
    Email     : String,
    MobileNo   : String,
    Tutor  		: String    
});
  
module.exports = mongoose.model('profile',profileschema);