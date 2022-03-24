
class testapi
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            message.TEST=req.body.TEST    
    }
    async process(message)
    {
        message.NAME=message.NAME+" Ashar Ali";
        message.TEST=message.TEST+"TEST"
    }
    async output(res,message)
    {
        res.responseBody.loopBackName=message.NAME;
        res.status="Success";
        res.responseBody.TEST=message.TEST
    }
    inputValidation(req)
    {

    }
    
}


module.exports= new testapi();
