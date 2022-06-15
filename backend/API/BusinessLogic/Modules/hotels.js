const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class hotels
{
    async createNewType(message)
    {
    
        var results=await client.Query("insert into hotels(hotelName,hotelLocation,roomPrice,hotelFacilities,hotelDescription,hotelStatus,createdBy) values(?,?,?,?,?,?)",
        [message.HOTELNAME, message.HOTELLOCATION,message.ROOMPRICE,message.HOTELFACILITIES,message.HOTELDESCRIPTION,message.HOTELSTATUS,]);
    }
    async gethotels()
    {
    
        var results=await client.Query("Select * from hotels",
        []);
        return results && results.length>0?results:[];
    }

    async gethotelsbyuserid(message)
    {
    
        var results=await client.Query("Select * from hotels where createdBy = ?",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }

    async getHotelDetails(id)
    {
    
        var results=await client.Query("Select * from hotels where id=?",
        [id]);
        return results && results.length>0?results[0]:null;
    }
    async deleteHotel(message)
    {
        var results=await client.Query("update hotels set isDeleted=1 where id=?" , 
        [message.HOTEL_ID]);
    }
}
module.exports=new hotels();