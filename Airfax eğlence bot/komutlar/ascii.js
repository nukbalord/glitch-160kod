var figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = (client, message, args, tools) => {
  var sınır = 75 // Kendiniz en yüksek harf sayısını ayarlayabilirsiniz
  
  if(args.join(' ').length > sınır) return message.channel.send(`Çok karakter yazdınız. En fazla ${sınır} karakter yazabilirsin!`) 
     if(!args[0]) return message.channel.send('Lütfen geçerli yazı giriniz.');
  
  figlet(`${args.join(' ')}`, function(err, data) {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      if (err) {
          console.log('Bir hata var...');
          console.dir(err);
          return;
      }
///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      message.channel.send(`${data}`, {code: 'AsciiArt'});

  });

};

exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: 'Eğlence'
};
exports.help = {
  name: 'ascii',///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
   description: 'Ascii şeklinde yazı yazmanızı sağlar.',
  usage: 'ascii <mesaj>'
}; 
