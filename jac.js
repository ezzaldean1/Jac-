const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mob2 Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(" United Server ",{type: 'PLAYING'})

	});

            var prefix = "." ;

            




client.on ("guildMemberAdd", member => {

  

   var role = member.guild.roles.find ("name",  "United");

   member.addRole (role);

  

})



   





                                           



        


client.on('message', message => {

    if(message.content.includes('youtube')){

                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)

    }

}

});

 

 client.on('message', async message => {

            if(message.content.includes('discord.gg')){ 

                if(message.member.hasPermission("MANAGE_GUILD")) return;

        if(!message.channel.guild) return;

        message.delete()

          var command = message.content.split(" ")[0];

    let muterole = message.guild.roles.find(`name`, "Muted");

    if(!muterole){

      try{

        muterole = await message.guild.createRole({

          name: "Muted",

          color: "#000000",

          permissions:[]

        })
message.guild.channels.forEach(async (channel, id) => {

          await channel.overwritePermissions(muterole, {

            SEND_MESSAGES: false,

            ADD_REACTIONS: false

          });

        });

      }catch(e){

        console.log(e.stack);

      }

    }

           if(!message.channel.guild) return message.reply('** This command only for servers**');

     message.member.addRole(muterole);

    const embed500 = new Discord.RichEmbed()

      .setTitle("Muted Ads")

            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)

            .setColor("c91616")

            .setThumbnail(`${message.author.avatarURL}`)

            .setAuthor(message.author.username, message.author.avatarURL)

        .setFooter(`${message.guild.name} `)

     message.channel.send(embed500)

     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');

   

       

    }

})

  
const adminprefix = "ub";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

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
  






   
client.login(process.env.BOT_TOKEN);





      
