const Discord = require('discord.js');
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`**${mesaj}**`)//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 2//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.help = {
  name: 'embedyaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!