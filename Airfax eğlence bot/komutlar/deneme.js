const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.send(`asciidoc = Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım ]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor(0x00AE86)///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.send(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y']
};
///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
exports.help = {
  name: 'deneme',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!