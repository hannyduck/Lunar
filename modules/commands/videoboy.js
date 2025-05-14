module.exports.config = {
  name: "nopre",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Vnam",
  description: "nopre",
  commandCategory: "Tiện ích",
  usages: "Tiện ích",
  cooldowns: 0
};

module.exports.run = async ({ event, api }) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
        var msg = `==「 𝐋𝐢𝐬𝐭 𝐍𝐨𝐩𝐫𝐞 」==\n━━━━━━━━━━━━━━\n𝟭:𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞
𝟮:𝐕𝐢𝐝𝐞𝐨 𝐂𝐡𝐢𝐥𝐥
𝟯:𝐕𝐢𝐝𝐞𝐨 𝐂𝐨𝐬𝐩𝐥𝐚𝐲
𝟰:𝐕𝐢𝐝𝐞𝐨 𝐆𝐢𝐫𝐥
𝟱:𝐌𝐩𝟑
𝟲:𝐕𝐢𝐝𝐞𝐨 𝐌𝐮𝐬𝐢𝐜
𝟳:𝐕𝐢𝐝𝐞𝐨 𝐓𝐢𝐤𝐓𝐨𝐤
𝟴:𝐕𝐢𝐝𝐞𝐨 𝐑𝐞𝐦𝐢𝐱
𝟵:𝐕𝐢𝐝𝐞𝐨 𝐒𝐞𝐠
𝟏𝟎:𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐮𝐲𝐢𝐧`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://toan-culi.tutoan205.repl.co/images/haugai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {

            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̛̀ 𝟏 𝐜𝐡𝐮́𝐭 𝐝𝐞̂̉ 𝐥𝐨𝐚𝐝 `, event.threadID, (err, info) =>
  setTimeout(() => {api.unsendMessage(info.messageID) } , 15000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 var name = await Users.getNameUser(event.senderID);

    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.sumiproject.net/video/videoanime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐂𝐡𝐢𝐥𝐥 𝐭𝐢𝐤𝐭𝐨𝐤 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.anhanh24.repl.co/getlink2')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐂𝐨𝐬𝐩𝐥𝐚𝐲 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://tran-doan-cutii.tdoan09.repl.co/vdcos')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
       case "4": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐆𝐢𝐫𝐥 𝐭𝐨̂̉𝐧𝐠 𝐡𝐨̛̣𝐩 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://scrapi.apibot.repl.co/vdgai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐌𝐩𝟑 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://scrapi.apibot.repl.co/mp3')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "6": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐌𝐮𝐬𝐢𝐜 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://randomlinkapi.anhanh24.repl.co/getlink4')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "7": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐓𝐢𝐤𝐓𝐨𝐤 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://tuandzit.xxtuandeeptraizxx1407s.repl.co/images/autosend')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "8": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐑𝐞𝐦𝐢𝐱 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://scrapi.apibot.repl.co/vdremix')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
        case "9": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐒𝐞𝐠 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
 url: (await global.nodemodule["axios"]('http://scrapi.apibot.repl.co/vdsex')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
}
            case "10": {
                      const axios = require('axios');
                   api.unsendMessage(handleReply.messageID);
                return api.sendMessage({body: `𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐮𝐲𝐢𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐝𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
            url: (await global.nodemodule["axios"]('https://congvien.cong-vienvien.repl.co/douyin')).data.url,
            method: "GET",
            responseType: "stream"
            })).data
            },event.threadID, event.messageID)
            }
            break;
          default:
           const choose = parseInt(event.body);
              if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́ 𝐝𝐞̂̉ 𝐱𝐞𝐦", event.threadID, event.messageID);
              if (choose > 9 || choose < 1) return api.sendMessage("→ 𝐍𝐠𝐮 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢𝐞̂́𝐭 𝐧𝐡𝐚̣̂𝐩 𝐬𝐨̂́ 𝐚̀", event.threadID, event.messageID); 
    }
    }
}
}
