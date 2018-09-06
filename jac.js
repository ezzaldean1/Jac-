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

    if(message.content.includes('discord.gg')){

                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)

    }

}

});

client.on('message', message => {

    if(message.content.includes('youtube')){

                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)

    }

}

});

 

 





   
client.login(process.env.BOT_TOKEN);





      
