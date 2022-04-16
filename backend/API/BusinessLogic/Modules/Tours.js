const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Tours
{
    async createNewTour(message)
    {
    
        var results=await client.Query("insert into tours(name,days,destination,departure,price,status,createdBy) values(?,?,?,?,?,?,?)",
        [message.NAME, message.DAYS, message.DESTINATION, message.DEPARTURE, message.PRICE, message.STATUS, message.API_USER_ID]);
    }
    async getAllTour()
    {
    
        var results=await client.Query("Select * from tours",
        []);
        return results && results.length>0?results:[];
    }
    async getToursByUserId(message)
    {
    
        var results=await client.Query("Select * from tours where createdBy = ?",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
}
module.exports=new Tours();