 var mongoose=require('mongoose');
 var Schema=mongoose.Schema;
 module.exports=function(){
    var schema=new Schema({
        pitanje:String,
        odgovor1:String,
        odgovor2:String,
        odgovor3:String,
        odgovor4:String,
        tacanOdgovor:Number
     });
     mongoose.model('pitanje',schema);
     schema.index({pitanje:1,tacanOdgovor:1});
 }
 