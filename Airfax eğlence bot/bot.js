const fs=require('fs');///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
const Discord=require("discord.js");
const client=new Discord.Client();
const db = require('quick.db')
const moment = require("moment");
const ayarlar=require("./ayarlar.json");///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
const express = require('express');
/////
const app = express()
app.get('/', (req, res) => res.send("Bot Aktif"))///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))
/////////////////////Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!



client.on("message", message => {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})
///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("Rush Code ❤ AirCod");
})


const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      reject(e);
    }
  });
};
///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  
client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

client.login(process.env.token)
///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!