const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Tours
{
    async createNewTour(message)
    {
    
        var results=await client.Query("insert into tours(name,days,destination,departure,price,status,createdBy,shortDescription, longDescription, quantity) values(?,?,?,?,?,?,?,?,?,?)",
        [message.NAME, message.DAYS, message.DESTINATION, message.DEPARTURE, message.PRICE, message.STATUS, message.API_USER_ID, message.SHORT_DESC, message.LONG_DESC, message.QTY]);
    }
    async getAllTour()
    {
    
        var results=await client.Query("Select * from tours where isDeleted = 0",
        []);
        return results && results.length>0?results:[];
    }
    async getTourDetails(id)
    {
    
        var results=await client.Query("Select * from tours where id=?",
        [id]);
        return results && results.length>0?results[0]:null;
    }
    async getToursByUserId(message)
    {
    
        var results=await client.Query("Select * from tours where createdBy = ? and isDeleted = 0",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
    async getCollabTours(message)
    {
    
        var results=await client.Query("Select * from tours where createdBy != ? and isDeleted = 0",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
    async deleteTour(message)
    {
        var results=await client.Query("update tours set isDeleted=1 where id=?" , 
        [message.TOUR_ID]);
    }
}
module.exports=new Tours();