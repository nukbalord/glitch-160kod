const Discord = require("discord.js");

exports.run = (client, message) => {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

const mrk = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Heyecanım:** **%${mrk}** **Heyecan** `);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

};

exports.conf = {
  enabled: true,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  guildOnly: false,
  aliases: ['heyecan'],
  permLevel: 0
};

exports.help = {
  name: "heyecanım",//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  description: "heyecaninizi ölçer",
  usage: "heyecan Ölçer"
};
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!