const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Customers
{
    async createCustomers(message)
    {
    
        var results=await client.Query("insert into customertourmap(name,customerPhone,tourid) values(?,?,?)",
        [message.NAME,message.CUSTOMERPHONE,message.TOURID]);
    }
    async getCustomers(message)
    {
    
        var results=await client.Query("Select * from customertourmap where tourid = ?",
        [message.TOURID]);
        return results && results.length>0?results:[];
    }
}
module.exports=new Customers();