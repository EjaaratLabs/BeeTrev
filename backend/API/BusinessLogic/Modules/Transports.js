const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Transports
{
    async createNewTransport(message)
    {
    
        var results=await client.Query("insert into transports(type,company,model,price,status) values(?,?,?,?,?)",
        [message.TYPE, message.COMPANY, message.MODEL, message.PRICE, message.STATUS]);
    }
    async getAllTransport()
    {
    
        var results=await client.Query("Select * from transports",
        []);
        return results && results.length>0?results:[];
    }
    async getTransportsByUserId(message)
    {
    
        var results=await client.Query("Select * from transports where createdBy = ?",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
    async getTransportDetails(id)
    {
    
        var results=await client.Query("Select * from transports where id=?",
        [id]);
        return results && results.length>0?results[0]:null;
    }
}
module.exports=new Transports();