const Discord = require("discord.js");

exports.run = (client, message) => {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

const mrk = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**İbneliğiniz:** **%${mrk}** **İbnelik** `);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ibnelik'],
  permLevel: 0
};

exports.help = {
  name: "ibneliğim",
  description: "İbneliğinizi ölçer",
  usage: "ibnelik Ölçer"//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!