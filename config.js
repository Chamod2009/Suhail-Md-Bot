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

  sessionName:process.env.SESSION_ID || "SUHAIL_11_05_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlM0SlQ2SFdVSTUvOFBEQk56cmR1ZkhBTEFnbnRnWGxEaWhUbkhqS0lndTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk94TzFVOEp4UjBtalo5cThHazhWNmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjJmODcwNzctNDA0Ni00MzVlLTk1MzItYTgxZTc2NjgyNzg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDMzLFxuICAgICAgMTg5LFxuICAgICAgMjA0LFxuICAgICAgMzYsXG4gICAgICAzNSxcbiAgICAgIDksXG4gICAgICAxMDcsXG4gICAgICA3MyxcbiAgICAgIDE1MyxcbiAgICAgIDQ0LFxuICAgICAgMjE5LFxuICAgICAgMjQ0LFxuICAgICAgMTgyLFxuICAgICAgMTE5LFxuICAgICAgNTEsXG4gICAgICAxMDksXG4gICAgICAxNTEsXG4gICAgICA4MyxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxMjgsXG4gICAgICA2NixcbiAgICAgIDkyLFxuICAgICAgMzAsXG4gICAgICA3OCxcbiAgICAgIDE2NyxcbiAgICAgIDE0MSxcbiAgICAgIDI1MyxcbiAgICAgIDYyLFxuICAgICAgNTEsXG4gICAgICAzMSxcbiAgICAgIDEwLFxuICAgICAgMTMyLFxuICAgICAgODcsXG4gICAgICAyMjgsXG4gICAgICAxNTUsXG4gICAgICAyMzgsXG4gICAgICAyNTQsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1hFV0g4UkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYwOTIxMjQ3Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDYyNjE4MjgyMDI2OTQ6NzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3I2OSt3SEVObXZxYmdHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDNCsrdGZzY3J4LzF4WW9KY2lFUVRleHJMeUtTVmtzWTZJZzYrd0RBTUI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImM4Qm9Ca1RnTEJDNUszZ3Baby9Ielk5aThqWmE1WFlVeldPMVo1ZHpQMXNKYlRFVUwxcGR6UnJrY1JTWG84S2JNMldONGoyY3pYTFR4blozMklIYUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJtZklDaktwMWF3d1NsaDFDd0c4SXY4cmJ1QzUyczRycFN4Y0V0QUgvd3V1SmkwR0RmZDc0RkFnQkhSZHprNHIxanlnSVhoVGtRdXc5VEoyUk1mN2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYwOTIxMjQ3Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzMxMTAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUZkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRmQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
 
