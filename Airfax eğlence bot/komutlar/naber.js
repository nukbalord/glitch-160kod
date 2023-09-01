const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' 👀')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('Naber :)')
        .setImage(`https://64.media.tumblr.com/ad9e589cc7e1acc6705f72344b5c2967/36a80b48a5bf5b97-d1/s500x750/cec146928634ecd09329106c2355b52ba1f55361.gif`)
    return message.channel.send(sunucubilgi);
    }
};//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["naber","naber"],
  permLevel: 0
};

exports.help = {
  name: 'naber',
  description: 'naber ',
  usage: 'naber'//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};