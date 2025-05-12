const timeout = 60
const coinsup = 20000 
const coinsdown = 5000
const tientrochoi = 100
module.exports.config = {
	name: "vuatv", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "???", // Công nhận module sở hữu là ai
	description: "game", // Thông tin chi tiết về lệnh
	commandCategory: "Trò Chơi", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const { senderID ,threadID, messageID } = event;
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [], img = [];
        arraytag.push({id: event.senderID, tag: nameSender});
        let balance = (await Currencies.getData(senderID)).money;
    if (balance <= 100) return api.sendMessage('bạn nghèo  quá nên không có tiền chơi đâu liuliu',threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(tientrochoi));
    const datagame = (await axios.get("https://caochungdat.me/docs/game/dhbcv2")).data;
    const random = datagame.keyword;
    const answer = datagame;
    let Avatar = (await axios.get(`https://caochungdat.me/docs/game/dhbcv1word=${encodeURI(random)}`, { responseType: "arraybuffer" } )).data; 
         fs.writeFileSync(__dirname + "/cache/vuatv.png", Buffer.from(Avatar, "utf-8") );
         img.push(fs.createReadStream(__dirname + "/cache/vuatv.png"));
     var msg = {body: `====『 𝗩𝗨𝗔 𝗧𝗜𝗘̂́𝗡𝗚 𝗩𝗜𝗘̣̂𝗧 』====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗯𝗮̣𝗻 ${nameSender} 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗰𝗮̂𝘂 𝗵𝗼̉𝗶 𝗻𝗮̀𝘆 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝟭 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗵𝗼̛̀𝗶 𝗻𝗵𝗲́ 𝗨𝘄𝗨\n→ 𝗕𝗼𝘁 𝘀𝗲̃ 𝘁𝗿𝘂̛̀ 𝟭𝟬𝟬 𝗺𝗼𝗻𝗲𝘆 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗶 𝗰𝗵𝗼̛𝗶 𝗻𝗵𝗮\n→ 𝗰𝗮̂𝘂 𝗵𝗼̉𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗽𝗵𝗶́𝗮 𝗱𝘂̛𝗼̛́𝗶 ❤️` ,mentions: arraytag,attachment: img}
        
        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            answer: answer.keyword
        })
    }) 
}
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
    const axios = global.nodemodule['axios'];  
    let { author, answer, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("xàm lồn quá cho người ta trả lời đi đbrr", event.threadID, event.messageID); 
    switch (handleReply.type) {
        case "reply": {
            const dapan = event.body
            if (dapan == answer) {
               await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
               
               var namePlayer = await Users.getData(event.senderID)
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `${namePlayer.name} đã trả lời chính xác!\nĐáp án: ${answer} (+${coinsup}$)`}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }
            else
               await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            return api.sendMessage(`Câu trả lời không đúng. Đáp án: ${answer} (-${coinsdown}$)!!!`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
        }
    }
      }