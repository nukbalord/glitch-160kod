const Discord = require('discord.js');

exports.run = async (client, message, args) => {
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
message.channel.send('Bekle..').then(a => {
var zar1 = ['1', '2', '3', '4', '5', '6'];//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
var zar2 = ['1', '2', '3', '4', '5', '6'];
setTimeout(() => {
a.edit(`*Zar atıldı. Çıkan sonuç:* **${Math.floor(Math.random()*zar1.length)} - ${Math.floor(Math.random()*zar2.length)}**`)
}, 1000);
});//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

};
exports.conf = {
  enabled: true,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  guildOnly: true,
  aliases: [],
  permLevel: 0,
}//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.help = {
  name: 'zar-at'
};