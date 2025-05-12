const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "xinloi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hải harin",
  description: "xin lỗi người Bạn Muốn",
  commandCategory: "game",
  usages: "@tag",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://i.imgur.com/DQV5c8R.gif",
             ];
   var callback = () => api.sendMessage({body: `${tag}, 𝗧𝗼̛́ 𝘀𝗮𝗶 𝗿𝗼̂̀𝗶 𝘁𝗼̛́ 𝘅𝗶𝗻 𝗹𝗼̂̃𝗶 𝗰𝗮̣̂𝘂 𝗻𝗵𝗶𝗲̂̀𝘂, 𝗰𝗮̣̂𝘂 𝘁𝗵𝗮 𝗹𝗼̂̃𝗶 𝗰𝗵𝗼 𝘁𝗼̛́ 𝗻𝗵𝗮. 𝗬𝗲̂𝘂 𝗰𝗮̂𝘂 💖` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/noprefix/xinloi.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/xinloi.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/xinloi.gif")).on("close",() => callback());
   };