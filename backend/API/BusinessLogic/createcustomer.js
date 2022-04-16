const Customers = require('./Modules/Customers');
var modle = require('./Modules/Customers');

class createCustomers
{
    async input(req,message)
    {
            message.NAME=req.body.NAME;
            message.CUSTOMERPHONE=req.body.CUSTOMERPHONE;
            message.TOURID=req.body.TOURID;
           
    }
    async process(message)
    {
        try {
            await modle.createCustomers(message);

        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "TOUR created successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new createCustomers();
