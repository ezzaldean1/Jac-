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



   





   
client.login(process.env.BOT_TOKEN);





      
