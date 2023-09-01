const Discord = require("discord.js");//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
const ayar = require("../ayarlar.json")

exports.run = (client, message, args) => {
  const mrt = new Discord.MessageEmbed()
    .setColor("#7700ff")
    .setDescription(`> Yapımcım : <@${ayar.sahip}>`)
    .setFooter(" yapımcım ") 
  message.channel.send(mrt);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};