const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send('**Çıkma Teklif Edeceğin Kişiyi Seçsene **');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!❤️:heart:')
    .addField('Ne Cevap Vericen Acaba Bende Merak Ettim😆(Ejder ise kabul etmene gerek yok :d)', `Hadi Kabul Et Bence`)
    .addField('Teklif Eden Kişi :', `➽ @${message.author.username}`)//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    .setFooter('Çıkma Teklifi ')
    teamtr.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('❤️ Çıkma Teklifi Ettin!')
    .setFooter('Çıkma Teklifi Ettim')
    message.channel.send(dmtamam);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    };
exports.conf = {
  enabled: true,
  guildOnly: true,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  aliases: ["çteklifet",'teklifet','çte'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi-et',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  description: 'Özel komut.',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: 'çıkma-teklifi-et'
};