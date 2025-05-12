let timeout = 120;
let moneydown = 0;
let axios = require('axios');
module.exports.config = {
  name: "hoingu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mod TNT",
  description: "Đố vui, hong vui thì thôi",   
  commandCategory: "game",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
}

module.exports.handleReply = async function ({ event, Users, api, handleReply, Currencies }) {
  let { dataGame, dapan, nameUser } = handleReply;
  let { threadID, messageID, senderID, body } = event;
  if (handleReply.author != senderID) return api.sendMessage(`𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗲́𝗽 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶`, event.threadID); 
  switch (handleReply.type) {
    case "reply": {
      let aw = body
      let dapanUser = dataGame
      let checkTrue = dapan
      let mon = parseInt(moneydown) + 5000;
      if (aw.toLowerCase() == 'a' && dataGame.a == checkTrue) {
        await Currencies.increaseMoney(senderID, mon);
        api.unsendMessage(handleReply.messageID)
          return api.sendMessage({body: `𝗖𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴 ${nameUser} đ𝗮̃ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰\n 𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴 ${mon} 𝗩𝗡𝗗\n Đ𝗮́𝗽 𝗮́𝗻: ${checkTrue}`}, threadID, messageID)   
      } else if (aw.toLowerCase() == 'b' && dataGame.b == checkTrue) { 
        await Currencies.increaseMoney(senderID, mon);
                api.unsendMessage(handleReply.messageID)
         return api.sendMessage({body: ` 𝗖𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴 ${nameUser} đ𝗮̃ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰\n 𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴 ${mon} 𝗩𝗡𝗗\n Đ𝗮́𝗽 𝗮́𝗻: ${checkTrue}`}, threadID, messageID)
      } else if (aw.toLowerCase() == 'c' && dataGame.c == checkTrue) {
        await Currencies.increaseMoney(senderID, mon);
                api.unsendMessage(handleReply.messageID)
         return api.sendMessage({body: ` 𝗖𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴${nameUser} đ𝗮̃ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰\n 𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴 ${mon} 𝗩𝗡𝗗\n Đ𝗮́𝗽 𝗮́𝗻: ${checkTrue}`}, threadID, messageID)
      } else if (aw.toLowerCase() == 'd' && dataGame.d == checkTrue) {
        await Currencies.increaseMoney(senderID, mon);
                api.unsendMessage(handleReply.messageID)
         return api.sendMessage({body: ` 𝗖𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴 ${nameUser} đ𝗮̃ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰\n 𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝘂̛𝗼̛̉𝗻𝗴 ${mon} 𝗩𝗡𝗗\n Đ𝗮́𝗽 𝗮́𝗻: ${checkTrue}`}, threadID, messageID)
      } else {
        await Currencies.decreaseMoney(senderID, moneydown);
            api.unsendMessage(handleReply.messageID)
              api.sendMessage(`𝗖𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴 ${nameUser} 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝘀𝗮𝗶 𝗿𝗼̂̀𝗶\n 𝗗𝗮𝗽 𝗮𝗻: ${dapan}\n 𝗕𝗶̣ 𝘁𝗿𝗼̣̂𝗺 𝗺𝗮̂́𝘁${moneydown} 𝗩𝗡𝗗`, threadID);
      }
    }
  }
}

module.exports.handleReaction = async function ({ Users, api, event, handleReaction, Currencies }) {
  let { threadID, senderID, reaction, userID } = event;
  let { dataGame, dapan, author, nameUser } = handleReaction;
  if (userID != author) return api.sendMessage(`Bieens đi con gà ko phải của m`, threadID);
  let mon = parseInt(moneydown) + 500;
  if (reaction != "❤" && reaction != "😆"&& reaction != "😯"&& reaction != "👍") return;
    let response = "";
    if (reaction == "❤") response = dataGame.a
    else if (reaction == "😆") response = dataGame.b
    else if (reaction == "😯") response = dataGame.c
    else if (reaction == "👍") response = dataGame.d

    if (response == handleReaction.dapan) { 
        await Currencies.increaseMoney(senderID, mon);
        api.unsendMessage(handleReaction.messageID)
        api.sendMessage(`𝗖𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴 ${nameUser} \n 𝗕𝗮̣𝗻 𝘁𝗿𝗼̣̂𝗺 đ𝘂̛𝗼̛̣𝗰 ${mon} 𝗩𝗡𝗗\n Đ𝗮́𝗽 𝗮́𝗻: ${dapan}`, threadID) 
    } else {
    await Currencies.decreaseMoney(senderID, moneydown);
    api.unsendMessage(handleReaction.messageID)
    api.sendMessage(`🪙𝗦𝗮𝗶 𝗿𝗼̂̀𝗶 ${nameUser} \n ❤️‍🔥Đ𝗮́𝗽 𝗮́𝗻 𝗹𝗮̀: ${dapan}\n 🥷𝗕𝗮̣𝗻 𝗯𝗶̣ 𝘁𝗿𝗼̣̂𝗺 𝗺𝗮̂́𝘁 ${moneydown} 𝗩𝗡𝗗!!`, threadID);
    }
}

module.exports.run = async function ({ api, event, Users, Currencies }) {
  let { threadID, messageID, senderID } = event;
  let dataMoney = await Currencies.getData(senderID);
  let money = dataMoney.money;
  if (money < moneydown) return api.sendMessage(`🪙𝗠𝗮̀𝘆 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́𝗮 đ𝘂̉ ${moneydown} 𝗩𝗡𝗗 𝗰𝘂́𝘁 𝗺𝗺 đ𝗶`, threadID, messageID);
  let res = await axios.get(`https://apidovui.miraiofficials123.repl.co/`);
  let dataGame = res.data
  let namePlayer_react = await Users.getData(senderID)
    return api.sendMessage({body: `🌐→𝗖𝗮̂𝘂 𝗵𝗼̉𝗶 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗯𝗮̣𝗻←🌐: ${dataGame.questions}\n\n→❤/𝗔. ${dataGame.a}\n→😆/𝗕. ${dataGame.b}\n→😯/𝗖. ${dataGame.c}\n→👍/𝗗. ${dataGame.d}\n\n💝 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 đ𝗲̂̉ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶`}, threadID, (error, info) => {
        global.client.handleReaction.push({
          type: "reply",
          name: this.config.name,
          author: senderID,
          messageID: info.messageID,
          dataGame: res.data,
          dapan: dataGame.dapan,
          nameUser: namePlayer_react.name
        })
        global.client.handleReply.push({
          type: "reply",
          name: this.config.name,
          author: senderID,
          messageID: info.messageID,
          dataGame: res.data,
          dapan: dataGame.dapan,
          nameUser: namePlayer_react.name
        })
setTimeout(function(){ 
        api.unsendMessage(info.messageID)
}, timeout * 1000);
    }) 
}
