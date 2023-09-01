const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Velet sana tokenimi vereceğime gerçekten inandın mı \nGerçekten inandıysan helal olsun.')
    .setColor("RANDOM")
      .setImage("https://64.media.tumblr.com/675ea7ef0f7f04219a657cc25c50b55a/tumblr_inline_mfnkqu0QUy1r6swbd.gif")
    .setTimestamp()
    return message.channel.send(embed);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'token',
  description: 'token',
  usage: 'token'
};
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!