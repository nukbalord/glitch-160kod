const Discord = require('discord.js');//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
	
	if (slot1 === slot2 && slot1 === slot3) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Tebrikler, kazandınız!
		`); 
	} else {//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Eyvah, kaybettin!
		`);	
	}
//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots oyunu oynatır',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: 'slots'
};