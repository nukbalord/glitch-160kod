const Discord = require('discord.js');
const client = new Discord.Client();//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  18CM ** :eggplant: ' ,'**Senin Malafatın  11CM ** :eggplant:' ,'**Senin Malafatın 32CM  ** :eggplant:' ,'**Senin Malafatın  35CM ** :eggplant:' ,'**Senin Malafatın  8CM  ** :eggplant:' ,'**Senin Malafatın  65CM  ** :eggplant:' ,'**Senin Malafatın 5CM  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  14CM ** :eggplant:' ,'**Senin Malafatın  1CM ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};


//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!