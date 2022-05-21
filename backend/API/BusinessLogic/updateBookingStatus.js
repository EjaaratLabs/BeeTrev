
var modle = require('./Modules/Customers');

class updateBookingStatus
{
    async input(req,message)
    {
            message.ID=req.body.id;
    }
    async process(message)
    {
        try {
            await modle.updateBookingStatus(message);

        }
        catch (ex) {
            console.log(ex);
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "updated successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new updateBookingStatus();
