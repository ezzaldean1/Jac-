const Discord = require('discord.js');

const fs = require('fs');

const moment = require('moment');

const jimp = require('jimp');

const Canvas = require('canvas');

 

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Gold Bot Is OnMusic')

  console.log('---------------')

  client.user.setStatus("Online")

 client.user.setActivity(" Crystal Server",{type: 'PLAYING'})

});
var dat = {} 


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




client.login(process.env.BOT_TOKEN); 
