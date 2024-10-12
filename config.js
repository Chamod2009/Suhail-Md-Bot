const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_12_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJ5ZCtNVW5tUldFUG11U3l0bVIzTGRoZlQxTXhQT21WTThzYUx1QkJLT289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRyRnkycDg3UTl1Nk01ZDhucUVtTFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDU5Mzg3MWQtY2NkMi00Yjk0LTk3ZDktMWRjNDg3NTMyNDQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMjI2LFxuICAgICAgMjE5LFxuICAgICAgMjUxLFxuICAgICAgMTU4LFxuICAgICAgMTgyLFxuICAgICAgMTAwLFxuICAgICAgNTAsXG4gICAgICAxNjAsXG4gICAgICA3MixcbiAgICAgIDEzMCxcbiAgICAgIDE4NCxcbiAgICAgIDE5OCxcbiAgICAgIDE4NCxcbiAgICAgIDIzOSxcbiAgICAgIDE3OCxcbiAgICAgIDc4LFxuICAgICAgMjU0LFxuICAgICAgMTY2LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAxOTEsXG4gICAgICAxMjAsXG4gICAgICAxNTMsXG4gICAgICAxNTgsXG4gICAgICA2NixcbiAgICAgIDE4NixcbiAgICAgIDU2LFxuICAgICAgMTQzLFxuICAgICAgMTYzLFxuICAgICAgOCxcbiAgICAgIDI2LFxuICAgICAgMjMzLFxuICAgICAgNzYsXG4gICAgICAyNTAsXG4gICAgICAxNjYsXG4gICAgICAxNixcbiAgICAgIDE0NSxcbiAgICAgIDE4NSxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaTjFBSzU4RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjA5MjEyNDc6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNjI2MTgyODIwMjY5NDo3M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbjY5K3dIRU92ZXFMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkM0Kyt0ZnNjcngvMXhZb0pjaUVRVGV4ckx5S1NWa3NZNklnNit3REFNQjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzdjM2JJakxYL1F4M3ZjQ2J3WTg0NWtjNlRIRnA0SXMyZENFanRSQUpaRlVMdW56UzZLdkdOVnlKcng4NTFTRUNtaklUd0xqZms3UURkcllrUitXQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNGtDT3JQeWEvTWR2SXU4NHRmR0FCWU9GdHhXUThDVFVqZmJZemlkNWU5YzdWK0UvVlRpMkxFTWt4SExsMlp2S09KblNic01Tam1zbHVzN1BkY1A2QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjA5MjEyNDc6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg3MjA3NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJRmRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlGZC5qc29uIjogIntcImtleURhdGFcIjpcIklkUktiTXJWSHJjbmJwVVVNUHJaN0F2eU5qTXVqU1dFM2RmVHRmOHY1dkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwNzUwNTk2MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
