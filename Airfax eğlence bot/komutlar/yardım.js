const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.run = async (client, message, args) => {
  const commandNames = Array.from(client.commands.keys());//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

  const Airfax = new Discord.MessageEmbed()

  .setTitle('Yardım Menüsü') //başlığınız.

  .setColor('GREEN') // Embed Rengi


  .setThumbnail(client.user.avatarURL())//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

  .setDescription(` __**= Komut Listesi =**__


  ${client.commands.map(c => `**${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)}  ::** ${c.help.description}`).join('\n\n')}`)


    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)

  message.channel.send(Airfax)

 
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.conf = {

  enabled: true,

  guildOnly: true,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

  aliases: ['help', 'YARDIM', 'HELP', 'HELPS'],

  permLevel: 0,

};//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.help = {

  name: 'yardım',

  usage: "!yardım"//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

};