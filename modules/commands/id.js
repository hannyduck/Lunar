module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy ID người dùng.",
	commandCategory: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
  const {get} = require('axios');
  const data = `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`//res.data.data;
//tải ảnh xuống
downloader = require('image-downloader'),
fse = require('fs-extra');
await downloader.image({url: data, dest: __dirname+'/cache/1.jpg'});
stream = fse.createReadStream(__dirname+'/cache/1.jpg' );
  const uid = event.type == 'message_reply' ? event.messageReply.senderID: !!Object.keys(event.mentions)[0] ? Object.keys(event.mentions)[0]: !!args[0] ? args[0]: event.senderID;
  get(`https://caochungdat.me/docs/facebook/timejoin?user=${uid}`).then(response => {
      var txt;
      if (response.data.status == 404) txt = `Không tìm thấy !`;
      if (response.data.status == 200) txt = ` 『⏳』𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐭𝐚̣𝐨 𝐚𝐜𝐜:\n${response.data.data.date.replace(' ', ' | ')}\n━━━━━━━━━━━━━━━━━━\n『📌』𝐔𝐢𝐝:\n${uid}\n『🔎』𝐋𝐢𝐧𝐤 𝐅𝐁:\nhttps://www.facebook.com/${uid}\n『💬』𝐈𝐁:\nm.me/${uid}`;
      api.sendMessage({body: txt, attachment: stream}, event.threadID, event.messageID);
  }).catch(e => api.sendMessage({body: e,attachment: stream}, event.threadID, event.messageID));
};

