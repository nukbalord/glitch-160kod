const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "buna katılmıyorum",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    "hayır",
    "neden olmasın",
    "herşeyide bana sormayın",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "imkansız",
    "sanmıyorum"
];
///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: !soru <soru>')///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};
///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
exports.help = {
  name: 'soru', 
  description: 'tom sorularınızı cevaplar',///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: 'soru <soru>'
};
