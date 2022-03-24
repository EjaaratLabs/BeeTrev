
var modle = require('./Modules/Transports');

class createTransport
{
    async input(req,message)
    {
            message.TYPE=req.body.TYPE;
            message.COMPANY=req.body.COMPANY;
            message.MODEL=req.body.MODEL;
            message.PRICE=req.body.PRICE;
            message.STATUS=req.body.STATUS;
    }
    async process(message)
    {
        try {
            await modle.createNewTransport(message);

        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "TRANSPORT created successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new createTransport();
