const Discord = require("discord.js");//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
const ayarlar = require("../ayarlar.json");
exports.run = async (bot, message, args) => {
const tac = new Discord.MessageEmbed()
  .setDescription(`Taç sahibi:\n <@${message.guild.owner.id}>` )
 .setColor("RANDOM")
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
return message.channel.send(tac)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};
exports.help = {
  name: "taç"
};//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!