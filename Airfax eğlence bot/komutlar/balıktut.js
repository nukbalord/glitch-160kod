const Discord = require("discord.js");
const client = new Discord.Client();///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

exports.run = (client, message, args) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

    var motion = [
      "``Balon Balığı Tuttun! :fish:``",
      "``Sazan Tuttun!`` :fish:",
      "``Köpek Balığı Tuttun İyi Para Eder Sat Sat`` :D",
      "``Uskumru Tuttun!`` :fish:",
      "``Mezgit Tuttun! Havyarıda Var Hee`` :) :fish:",
      "``Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?``",
      "``Hamsi Tuttun!`` :fish:",
      "``Levrek Tuttun!`` :fish:",
      "``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:",
      "``Alabalık Tuttun!`` :fish:",
      "``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:",
      "``İstavrit Tuttun!`` :fish:"
    ];
    var motion = motion[Math.floor(Math.random() * motion.length)];
    message.edit(`${motion}`);
  });///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balık", "balıktut"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: "balıktut"
};