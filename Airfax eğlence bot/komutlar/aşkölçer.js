exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %1 Gösteriyor.",
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %6 Gösteriyor.",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %23 Gösteriyor.",
      "Aşkölçer %26 Gösteriyor.",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %30 Gösteriyor.",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      "Aşkölçer %40 Gösteriyor.",
      "Aşkölçer %50 Gösteriyor.",
      "Aşkölçer %60 Gösteriyor.",
      "Aşkölçer %70 Gösteriyor.",
      "Aşkölçer %73 Gösteriyor.",
      "Aşkölçer %76 Gösteriyor.",
      "Aşkölçer %79 Gösteriyor.",
      "Aşkölçer %82 Gösteriyor.",
      "Aşkölçer %85 Gösteriyor.",
      "Aşkölçer %88 Gösteriyor.",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      "Aşkölçer %90 Gösteriyor.",
      "Aşkölçer %91 Gösteriyor.",
      "Aşkölçer %92 Gösteriyor.",
      "Aşkölçer %93 Gösteriyor.",
      "Aşkölçer %94 Gösteriyor.",
      "Aşkölçer %95 Gösteriyor.",
      "Aşkölçer %96 Gösteriyor.",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
      "Aşkölçer %97 Gösteriyor.",
      "Aşkölçer %98 Gösteriyor.",
      "Aşkölçer %99 Gösteriyor.",
      "Aşkölçer %100 Gösteriyor.",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  }});
 
 
 ///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 ///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }