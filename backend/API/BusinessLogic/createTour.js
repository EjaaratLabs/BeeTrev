
var modle = require('./Modules/Tours');

class createTour
{
    async input(req,message)
    {
            message.NAME=req.body.NAME;
            message.DAYS=req.body.DAYS;
            message.DESTINATION=req.body.DESTINATION;
            message.DEPARTURE=req.body.DEPARTURE;
            message.PRICE=req.body.PRICE;
            message.STATUS=req.body.STATUS;
            message.SHORT_DESC=req.body.SHORT_DESC;
            message.LONG_DESC=req.body.LONG_DESC;
            message.QTY=req.body.QTY;
    }
    async process(message)
    {
        try {
            await modle.createNewTour(message);

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
module.exports= new createTour();
