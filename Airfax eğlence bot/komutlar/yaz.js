const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.conf = {
  aliases: ['say', 'söyle'],
  permLevel: 0,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: 'yaz [yazdırmak istediğiniz şey]'
};