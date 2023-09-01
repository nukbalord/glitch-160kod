const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
    return message.channel
      .send(
        new Discord.MessageEmbed()//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
.addField(`❌ **Yazı Yazman Gerek** ❌`)
  );
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("RED")//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("Oylama Sistemi", client.user.avatarURL())
        .addField(`**Oylama**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("✅");
      message.react("❌");//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: "oylama <oylamaismi>"
};