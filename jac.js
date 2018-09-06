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

  

  






   
client.login(process.env.BOT_TOKEN);





      
