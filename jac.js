const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mo3 Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(" Crystal Server",{type: 'WATCHING'})

});

            var prefix = "#" ;

            

var user = {};
var warn = {};

var user = {};
var warn = {};

client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 8) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 8) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\nميوت شات\n")
          .setFooter("Crystal")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | تمت معاقبتك")
      .setDescription(`**لقد قمت بمخالفة قوانين السيرفر**\n\nتمت معاقبتك من قبل :\nL-\nنوع العقوبة:\nميوت شات\nتاريخ العقوبة:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
          .setFooter("Crystal")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});





           

            const adminprefix = "#";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const devs = ['470500980342128650'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'setname')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'setavatar')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'setT')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});

             

            

  const misaka = new Set();

    client.on('message', async msg => {

  if(msg.content.startsWith("رابط")) {

  if (misaka.has(msg.author.id)) {

    let misakaemb = new Discord.RichEmbed()

    .setDescription(`يجب عليك الانتظار 24 ساعه!`)

    .setColor(`RED`)

    return msg.channel.send(misakaemb).then(message => {

     message.delete(10000) 

    })

    

    }

    misaka.add(msg.author.id);

  

   msg.channel.createInvite({

        thing: true,

        maxUses: 5,

        maxAge: 86400,

  }).then(invite =>

   msg.author.sendMessage(`

         <@${msg.author.id}> 

         **maxUses: 5 **

         ${invite.url}`)

  )

    msg.channel.send(`**:link: Invite Linke Sent In DM Successfully**`)

  }

    setTimeout(() => {

    },86400000);

    })          

            

            

           

           

           

client.on('message',message =>{

    

    if(message.content.startsWith(prefix + 'top')) {

  message.guild.fetchInvites().then(i =>{

  var invites = [];

   

  i.forEach(inv =>{

    var [invs,i]=[{},null];

     

    if(inv.maxUses){

        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;

    }else{

        invs[inv.code] =+ inv.uses;

    }

        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);

   

  });

  var embed = new Discord.RichEmbed()

  .setColor("#000000")

  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)

  

           message.channel.send({ embed: embed });

   

  });

   

    }

  });

  

  

  

  

  

  

  

  

client.on('message', message => {

if (message.content.startsWith('#inv-info')) {

let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 

  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;

  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL

  message.guild.fetchInvites().then(invs => {

    let member = client.guilds.get(message.guild.id).members.get(oi);

    let personalInvites = invs.filter(i => i.inviter.id === oi);

    let urll = invs.filter(i => i.inviter.id === oi);

    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);

    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

   let exec = personalInvites.reduce((p, v) => v.inviter);

 let possibleInvites = [['Total de membros recrutados:']];

possibleInvites.push([inviteCount, exec]);

        let user = message.mentions.users.first() || message.author;

        let mem = message.guild.member(user);

        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();

        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

const alpha = new Discord.RichEmbed()

.setAuthor(img)

.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)

.setThumbnail(imagemm)

.setColor(0x4959e9);

message.channel.send(alpha);

});

};

  });

       


const fs = require('fs');

const moment = require('moment');

const jimp = require('jimp');

const Canvas = require('canvas');

 

client.on('guildMemberAdd', member => {

     const welcomer =  member.guild.channels.find('name', 'crystal');

const w = ['./w1.png'];

 

         let Image = Canvas.Image,

            canvas = new Canvas(400, 200),

            ctx = canvas.getContext('2d');

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

            if (err) return console.log(err);

            let BG = Canvas.Image;

            let ground = new Image;

            ground.src = Background;

            ctx.drawImage(ground, 0, 0, 400, 200);

             

         

 

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;

                jimp.read(url, (err, ava) => {

                    if (err) return console.log(err);

                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                        if (err) return console.log(err);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(`welcome to crystal`, 300, 130);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(member.user.username, 200, 150);

 

                let Avatar = Canvas.Image;

                              let ava = new Avatar;

                              ava.src = buf;

                              ctx.beginPath();

                              ctx.arc(77, 101, 62, 0, Math.PI*2);

                              ctx.stroke();

                                 ctx.clip();

                                 ctx.drawImage(ava, 13, 38, 128, 126);  

                         

               

                             

welcomer.sendFile(canvas.toBuffer())

 

 

 

     

     

                    }  )  

     

                   

 

})

      });                    

});

var dat = JSON.parse("{}");

function forEachObject(obj, func) {

    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });

}

client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("470637918222811138");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("484818214665322496");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("470637918222811138");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

                    setTimeout(function() {

 channel.send(`**invited by** ${Invite.inviter} `) ;

                    },1500);

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});
            
            

client.on('message', message => {

  if (message.guild) {

 let embed = new Discord.RichEmbed()

  let args = message.content.split(' ').slice(1).join(' ');

if(message.content.split(' ')[0] == prefix + 'bc') {

  if (!args[1]) {

message.channel.send("**#bc <message>**");

return;

}

      message.guild.members.forEach(m => {

 if(!message.member.hasPermission('ADMINISTRATOR')) return;

          var bc = new Discord.RichEmbed()

          .setAuthor(message.author.username, message.author.avatarURL)

          .addField(' The server', `${message.guild.name}`, true)

          .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)

          .addField(' the messege ', args)

          .setThumbnail(message.guild.iconURL)

          .setColor('RANDOM')

          m.send(`${m}`,{embed: bc});

      });

      const unknown = new Discord.RichEmbed()

      .setAuthor(message.author.username, message.author.avatarURL)

      .setTitle('✅| the messege is loading ')

      .addBlankField(true)

      .addField('♨| i got sended to  ', message.guild.memberCount , true)

      .addField('📝| the message ', args)

      .setColor('RANDOM')

      message.channel.sendEmbed(embed);

  }

  } else {

      return;

  }

});



	   
 

client.on('ready', () => {

});
/*جميع الح��وق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });







client.login(process.env.BOT_TOKEN)
