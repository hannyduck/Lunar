module.exports.config = {
    name: "family",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "NTKhang",
    description: "Tạo ảnh all thành viên trong box",
    commandCategory: "Box Chat",
    usages: "<size> [#mã màu] hoặc family <size>\nNhập size avatar thành viên thích hợp và mã màu cho chữ (mặc định là đen) theo cú pháp:\n$family <size> <mã màu> <title>\nTrong đó:\n•size: Size mỗi avatar thành viên\n•mã màu: mã màu dạng hex\n•title: tiêu đề ảnh, mặc định là tên box\nVí dụ: $family 200 #ffffff Anh em một nhà\nNếu chọn size = 0 thì sẽ tự chỉnh size, nếu không điền title thì title sẽ là tên box",
    cooldowns: 5,
    dependencies: {
      "fs-extra": "", 
      "axios":"", 
      "canvas": "", 
      "jimp": "", 
      "node-superfetch": "",
      "chalk": ""
    }
};


module.exports.run = async ({ event, api, args }) => {
  var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  try {
    if(global.client.family == true) return api.sendMessage("Hệ thống đang xử lý yêu cầu từ box khác, vui lòng quay lại sau", event.threadID, event.messageID);
    global.client.family = true;
	  var timestart = Date.now();
	  const fs = global.nodemodule["fs-extra"];
	  const axios = global.nodemodule["axios"];
	  const { threadID, messageID } = event;
	  const request = global.nodemodule["request"];
	  const superfetch=global.nodemodule["node-superfetch"];
	  if(!fs.existsSync(__dirname+'/cache/fontfamily.ttf')) {
	    let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1jv4ludBd7hWuEiOs13kR0JXljCxkOYUl&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/fontfamily.ttf", Buffer.from(getfont, "utf-8"));
	  };
	  
	  if(!args[0] || isNaN(args[0]) == true || args[0] == "help") {
	    if(!fs.existsSync(__dirname+"/cache/hexcolor.png")) {
	     let getimg = (await axios.get(`https://www.htlvietnam.com/images/bai-viet/code-mau/bang-ma-mau-02.jpg`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/hexcolor.png", Buffer.from(getimg, "utf-8"));
	    }
	    global.client.family = false;
		return api.sendMessage({body: "Nhập size avatar thành viên thích hợp và mã màu cho chữ (mặc định là đen) theo cú pháp:\n$family <size> <mã màu> <title>\nTrong đó:\n•size: Size mỗi avatar thành viên\n•mã màu: mã màu dạng hex\n•title: tiêu đề ảnh, mặc định là tên box nếu ko điền\nVí dụ: $family 200 #ffffff Anh em một nhà\nNếu chọn size = 0 thì sẽ tự chỉnh size, nếu không điền title thì title sẽ là tên box",
		attachment: fs.createReadStream(__dirname+"/cache/hexcolor.png")}, threadID, messageID);
	  };
    
    
    const jimp = global.nodemodule["jimp"];
    const chalk = global.nodemodule["chalk"];
    const Canvas = global.nodemodule["canvas"];
  

    var threadInfo = await api.getThreadInfo(threadID);
    var arrob = threadInfo.adminIDs;
    var arrad = [];
    for(let qtv of arrob) {
      arrad.push(qtv.id)
    };
    const background = await Canvas.loadImage("https://i.imgur.com/5AaxqG6.jpg");
    
    var idtv = threadInfo.participantIDs;
  
    var xbground = background.width,
        ybground = background.height;


    var dem = 1;
    var tds = 200,
        s = parseInt(args[0]);//size
        //AUTO SIZE
    var mode = "";
    if(s == 0) {
      var dtich = xbground*(ybground-tds);
      var dtichtv = Math.floor(dtich/idtv.length);
      var s = Math.floor(Math.sqrt(dtichtv));
      mode += " (Auto size)"
    };
        //===============================
    var l =     parseInt(s/15),//lines
        x =     parseInt(l),//
        y =     parseInt(tds),//
        xcrop = parseInt(idtv.length*s),
        ycrop = parseInt(tds+s);
        console.log(s);
    s = s-l*2;
    //===============================
    
    var color = args[1];
    if(!color || !color.includes("#")) {
      color = "#000000";
      autocolor = true;
    };
        if(s > ybground || s > xbground) {
          global.client.family = false;
          return api.sendMessage(`Size avatar phải nhỏ hơn size background\nSize background: X: ${xbground}, Y: ${ybground}`, threadID, messageID);
        }
        api.sendMessage(`💚 𝗦𝗼̂́ 𝗮̉𝗻𝗵 𝗱𝘂̛̣ 𝘁𝗶́𝗻𝗵: ${idtv.length}\n💜 𝗦𝗶𝘇𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱: ${xbground} x ${ybground}\n❤️ 𝗦𝗶𝘇𝗲 𝗺𝗼̂̃𝗶 𝗮𝘃𝗮𝘁𝗮𝗿: ${s}${mode}\n🧡 𝗠𝗮̀𝘂: ${color}\n❤️‍🔥𝗕𝗼𝘁 𝘁𝗿𝗼𝗻𝗴 𝗾𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝘅𝘂̛̉ 𝗹𝘆́ 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻, 𝗾𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝗻𝗮̀𝘆 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗺𝗮̂́𝘁 𝘁𝗼̛́𝗶 𝟱𝗽 𝗵𝗼𝗮̀𝗻 𝘁𝗮̂́𝘁...`,threadID, messageID);
    var loadkhung = await Canvas.loadImage("https://i.ibb.co/sqJwkY9/neon-frame-transparent-background-16-700x700-1.png");//("https://s1.uphinh.org/2021/06/24/1624551553171.png");
    var title = args.slice(2).join(" ") || threadInfo.name;
    var path_alltv = __dirname+`/cache/alltv${threadID}${Date.now()}.png`;
    function delay(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
    };
    const canvas = Canvas.createCanvas(xbground, ybground);
    let ctx = canvas.getContext('2d');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    var ngdung = 0;// đếm acc die
    //======FOR LOOP DRAW AVATAR=====//
    
    for(let id of idtv) {
      console.log(dem, chalk.green("FAMILY: ")+"đang vẽ avt của id "+id);
        try {
        	var avatar = await superfetch.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=${TOKEN}`);
        	if(avatar.url.includes(".gif")) {throw Error};
        }
        catch(e) {
            ngdung += 1;
            continue; 
        };

        if(x+s > xbground) {
          xcrop = x;
        	x += (-x)+l;
        	y += s+l;
        	ycrop += s+l;
        };
        
        if(ycrop > ybground) {
          ycrop += (-s);
          break;
        }; 
      
        avatar = avatar.body;
        const img = new Canvas.Image();
        var avatarload = await Canvas.loadImage(avatar);
        img.src = avatarload;

        ctx.drawImage(avatarload, x, y, s, s);

        if(arrad.includes(id)) {
        ctx.drawImage(loadkhung, x, y, s, s);
        };
        console.log(chalk.green("Family: ")+"Đã vẽ avt của id "+id);
        dem++;
        img.onerror = err => { throw err };
        x += parseInt(s+l);
    };
   Canvas.registerFont(__dirname+"/cache/fontfamily.ttf", {
        family: "Manrope"
    });
    ctx.font = "100px Manrope";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(title, xcrop/2, 133);
    //ctx.beginPath();
    console.log(chalk.yellow("Convert to buffer..."));
    //const imageBuffer = canvas.toBuffer();

    console.log(chalk.blue(`Sucess X: ${xcrop}, Y: ${ycrop}`));
    try{//ktra auto cắt ảnh có bị lỗi hay ko
      const imagecut = await jimp.read(canvas.toBuffer());
      console.log("Đã đọc image", xcrop, ycrop);
      //=========== CUT IMAGE ===========//
      imagecut.crop(0, 0, xcrop, ycrop+l-30).writeAsync(path_alltv);
      console.log("Đã cắt xong ảnh và lưu vào cache");
      await delay(200);
       api.sendMessage({body: `🍓 𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${dem} (𝗟𝗼̣𝗰 𝗵𝗼𝗮̀𝗻 𝘁𝗮̂́𝘁 ${ngdung} 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸)\n🍇 𝗦𝗶𝘇𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱: ${xbground} x ${ybground}\n🍊 𝗦𝗶𝘇𝗲 𝗺𝗼̂̃𝗶 𝗮𝘃𝗮𝘁𝗮𝗿: ${s}${mode}\n🍩 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()-timestart)/1000)} 𝗴𝗶𝗮̂𝘆`,
          attachment: fs.createReadStream(path_alltv, { 'highWaterMark': 128 * 1024 })
       }, threadID, (e, info) => {
         if(e) {
            api.sendMessage("Đã xảy ra lỗi, vui lòng thử lại sau", threadID, messageID);
         };
         fs.unlinkSync(path_alltv);
       }, messageID);
       global.client.family = false
    }
    catch(e) {
      console.log(e.stack);
      fs.writeFileSync(path_alltv, canvas.toBuffer());
       api.sendMessage({
        body: `Đã xảy ra lỗi Auto cut\n🍓 𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${dem} (𝗟𝗼̣𝗰 𝗵𝗼𝗮̀𝗻 𝘁𝗮̂́𝘁 ${ngdung} 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸)\n🍇 𝗦𝗶𝘇𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱: ${xbground} x ${ybground}\n🍊 𝗦𝗶𝘇𝗲 𝗺𝗼̂̃𝗶 𝗮𝘃𝗮𝘁𝗮𝗿: ${s}${mode}\n🍩 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()-timestart)/1000)} 𝗴𝗶𝗮̂𝘆`,
            attachment: fs.createReadStream(path_alltv, { 'highWaterMark': 128 * 1024 })
         }, threadID, (e, info) => {
           if(e) {
              api.sendMessage("Đã xảy ra lỗi, vui lòng thử lại sau", threadID, messageID);
           };
           fs.unlinkSync(path_alltv);
         }, messageID);
         global.client.family = false;
    }
  }
  catch(e) {global.client.family = false};
}