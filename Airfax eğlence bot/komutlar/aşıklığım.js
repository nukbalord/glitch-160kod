const Discord = require("discord.js");

exports.run = (client, message) => {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

const mrk = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Aşıklığınız:** **%${mrk}** **Aşık** `);

};

exports.conf = {
  enabled: true,///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  guildOnly: false,
  aliases: ['aşk'],
  permLevel: 0
};

exports.help = {
  name: "aşkım",
  description: "aşıklığınızı ölçer",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: "Aşk Ölçer"
};
