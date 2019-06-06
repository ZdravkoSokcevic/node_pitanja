var models=['pitanje.js'];
exports.intialize=function(){
    var l=models.length;
    for(var i=0;i<l;i++)
    {
        require(models[i])();
    }
}