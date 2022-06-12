const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class CollaborateTour
{
    async createCollaboration(message)
    {
    
        var results=await client.Query("insert into tourcollaborate(operatorId,tourId,price,quantity) values(?,?,?,?)",
        [message.API_USER_ID,message.TOURID,message.PRICE,message.QTY]);
    }
    async getTourCollaborate(message)
    {
    
        var results=await client.Query("Select * from tourcollaborate inner join tours  on tourcollaborate.tourId = tours.id inner join users on tours.createdBy=users.UserName where tours.createdBy = ?",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
    // async getCustomers(message)
    // {
    
    //     var results=await client.Query("Select * from customertourmap where tourid = ?",
    //     [message.TOURID]);
    //     return results && results.length>0?results:[];
    // }
    // async updateBookingStatus(message)
    // {
    //     var results=await client.Query("update customertourmap set bookingStatus=1 where id=?" , 
    //     [message.ID]);
    // }
}
module.exports=new CollaborateTour();