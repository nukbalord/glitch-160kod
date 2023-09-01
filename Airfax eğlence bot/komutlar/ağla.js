const Discord = require("discord.js");
const bot = require("../bot.js");

exports.run = (client, message) => {
  if (!message.guild) {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    return message.author.send(``);
  }
  if (message.author.bot === true) {
    return;
  }
  if (!message.guild) {
    const motion = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    return message.author.sendEmbed(motion);
  }
  if (message.channel.type !== "dm") {
    const motion = new Discord.MessageEmbed()
      .setAuthor("Tom Ağlıyor Hemen Ondan Özür Dile :(")
      .setColor(3447003)
      .setTimestamp()
      .setDescription("Ühü")
      .setImage(
        `https://64.media.tumblr.com/3fec0fd68ab5a7fc23337fedda517b53/tumblr_p9qe0pDgQc1u8em3ko1_400.gif`
      );
    return message.channel.send(motion);
  }///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ağla",
  description: "Botu Ağlatırsınız.",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: "ağla"
};