const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Announcements
{
    async createNewAnnouncement(message)
    {
    
        var results=await client.Query("insert into announcements(title,message) values(?,?)",
        [message.TITLE, message.MESSAGE]);
    }
    async getAllAnnouncement()
    {
    
        var results=await client.Query("Select * from announcements",
        []);
        return results && results.length>0?results:[];
    }
}
module.exports=new Announcements();