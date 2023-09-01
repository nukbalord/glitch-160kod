const discord = require('discord.js')
exports.run = function(client, message, args,params) {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

  if (args.length < 1) {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    return message.reply('Doğru Kullanım !tersyazı merhaba')
  }
   //Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
message.channel.send(args.join(' ').split('').reverse().join(''))
};

exports.conf = {
  aliases: [ 'ters' ],
  enabled: true,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'tersyazı',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  category: 'Kullanıcı',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: 'tersyaz yazı',
};