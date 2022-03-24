var modle = require('./Modules/MembershipType');

class gettourdetails
{
    async input(req,message)
    {
        message.TEST = req.query.test
        message.TEST2 = req.params.test2
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            // message.TYPEID=req.body.typeId 
            // message.TYPENAME=req.body.typeName
             
    }
    async process(message)
    {
    //    try{ 
    //    message.LIST = await modle.getmembershiptype(message)}
    //    catch(ex){console.log (ex)}
    }
    async output(res,message)
    {
        res.responseBody.loopBackName=message.NAME;
        res.status="Success";
        res.responseBody.TEST=message.TEST
        res.responseBody.TEST2=message.TEST2
        res.responseBody.TOTAl=message.TOTAl
        res.responseBody.message="memebership type created success"
        res.responseBody.list= message.LIST
    }
    inputValidation(req)
    {

    }
    
}


module.exports= new gettourdetails();
