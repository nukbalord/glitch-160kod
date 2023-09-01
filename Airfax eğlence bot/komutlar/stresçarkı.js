const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} bir stres çarkı çevirdi!`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü.`
            }
        });
    }, 5 * 1000);
};  //Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  name: 'stresçarkı', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarkı'
};