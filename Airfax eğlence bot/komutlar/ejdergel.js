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
    .setAuthor(message.author.username + ' Tomun Ejderi Geldi!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('Ejder Geldi')
        .setImage(`http://pa1.narvii.com/6800/51d30a547716cd16e7dbca6140621103590aff1f_00.gif`)
    return message.channel.send(sunucubilgi);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ejder","ejder"],//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  permLevel: 0
};

exports.help = {
  name: 'ejder',
  description: 'Ejder ',
  usage: 'ejder'
};//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!