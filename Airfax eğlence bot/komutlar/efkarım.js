const Discord = require("discord.js");

exports.run = (client, message) => {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

const mrk = Math.floor(Math.random() * 100) + 1;//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

return message.channel.send(`**Efkarınız:** **%${mrk}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  aliases: ['efkar'],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!