module.exports.config = {
    name: "dodeptrai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DMH",
    description: "Kiểm tra độ đẹp đẹp trai của bạn",
    commandCategory: "imgur",
    usages: "dodeptrai",
    cooldowns: 3,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async ({ event, api, Currencies, args, Users }) => {

    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    var tile = Math.floor(Math.random() * 101);
    
if (!args[0]) {
    var id = event.senderID;
    var name = (await Users.getData(id)).name
    var callback = () => api.sendMessage({body:`😎 Tỉ lệ độ đẹp trai của bạn ${name}\n[👱] Khoảng ${tile}% 😏`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }

else if (Object.keys(event.mentions).length == 1) {
    var mentions = Object.keys(event.mentions)
    var name = (await Users.getData(mentions)).name
    var callback = () => api.sendMessage({body:`😎 Tỉ lệ độ đẹp trai của bạn ${name}\n[👱] Khoảng ${tile}% 😏`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }

else {
  if(!args[1]){
  if(event.type == "message_reply") { idmen = event.messageReply.senderID }
    else idmen = event.senderID;
    var name = (await Users.getData(idmen)).name
    var callback = () => api.sendMessage({body:`😎 Tỉ lệ độ đẹp trai của bạn ${name}\n[👱] Khoảng ${tile}% 😏`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${idmen}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   
    }
  }
}
