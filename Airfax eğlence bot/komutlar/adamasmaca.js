const { stripIndents } = require('common-tags');///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
let oyndurum = new Set();

module.exports.run = async (bot, message, args) => {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!

  let kelime= [
  "elma",
  "armut",
  "mahmut",
  "eşya",
  "sunucu",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  "ismail",
  "eşek",
  "anlox",
  "siber",
  "kral",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  "biziz",
  "yılbaşı",
  "köpek",
  "salata",
  "biber",
  "camii",
  "maymun",
  "aslan",///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  "ali",
  "bali",
    
 
]
 
        if (oyndurum.has(message.channel.id)) return message.reply('Kanal başına sadece bir adam asmaca oyunu meydana gelebilir.');

        try {
            const cevap = kelime[Math.floor(Math.random() * kelime.length)].toLowerCase();///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
            let point = 0;
            let displayText = null;
            let tahmin = false;
            const confirmation = [];///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
            const yanlış = [];
            const display = new Array(cevap.length).fill('_');
            while (cevap.length !== confirmation.length && point < 6) {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
                await message.channel.send(stripIndents`
                    ${displayText === null ? '**Kobra Adam Asmaca**!' : displayText ? '**Çok iyisin!**' : '**Yanlış Harf!**'}
                         **Kelime:**    \`${display.join(' ')}\`
                    **Yanlış Harfler:** ${yanlış.join(', ') || 'Yok'}
                    \`\`\`
                    _________
                    |    |
                    |    ${point > 0 ? '' : ''}
                    |   ${point > 2 ? '┌' : ' '}${point > 1 ? '()' : ''}${point > 3 ? '┐' : ''}
                    |    ${point > 4 ? '/' : ''} ${point > 5 ? '\\' : ''}
                    |
                    \`\`\`
                `);
                const filter = res => {
                    const choice = res.content.toLowerCase();
                    return res.author.id === message.author.id && !confirmation.includes(choice) && !yanlış.includes(choice);
                };
                const guess = await message.channel.awaitMessages(filter, {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
                    max: 1,
                    time: 300000
                });
                if (!guess.size) {
                    await message.channel.send('Zamanın doldu!');///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
                    break;
                }
                const choice = guess.first().content.toLowerCase();///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
                if (choice === 'end') break;
                if (choice.length > 1 && choice === cevap) {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
                    tahmin = true;
                    break;
                } else if (cevap.includes(choice)) {
                    displayText = true;
                    for (let i = 0; i < cevap.length; i++) {///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
                        if (cevap.charAt(i) !== choice) continue;
                        confirmation.push(cevap.charAt(i));
                        display[i] = cevap.charAt(i);
                    }
                } else {
                    displayText = false;
                    if (choice.length === 1) yanlış.push(choice);///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
                    point++;
                }
            }
            oyndurum.delete(message.channel.id);
            if (cevap.length === confirmation.length || tahmin) return message.channel.send(`**Tebrikler kelimeyi buldun! **${cevap}!`);
            return message.channel.send(`Maalesef bilemedin kelime bu: **${cevap}**`);
        } catch (err) {
            oyndurum.delete(message.channel.id);
            return message.reply(`Olamaz! Bir Hata Verdi: \`${err.message}\``);///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
        }
    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adamasmaca'],///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  permlevel: 0
};

exports.help = {
  name: 'adamasmaca',
  description: 'Adam asmaca oynarsınız.',///Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
  usage: 'adamasmaca'
};