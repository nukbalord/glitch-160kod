const Discord = require('discord.js');

exports.run = async (client, message, args) => {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:Yldz:742698148329291826>`)///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Alevli Logo Oluşturuldu')
  message.channel.send(embed)///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    name: 'alev',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'alev <yazı>'
}///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!