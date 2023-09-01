const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    .setAuthor(message.author.username + ' 🖕')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://c.tenor.com/6xQjL5Y9Xc8AAAAC/middle-finger.gif`)
    return message.channel.send(sunucubilgi);

 message.delete();

    }
};//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ortaparmak","ortaparmak"],
  permLevel: 0
};

exports.help = {
  name: 'ortaparmak',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  description: 'ortaparmak ',
  usage: 'ortaparmak'
};