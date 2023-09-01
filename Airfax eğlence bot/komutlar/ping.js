exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send('Ping?');
    msg.edit(`Pong! Bot Gecikme Süresi ${msg.createdTimestamp - message.createdTimestamp}ms.`);//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
};

exports.help = {
    name: 'ping',
    category: 'Miscelaneous',//Airfax Youtube Kanalından Paylaşılmıştır Çalınması Suçtur!!!
    description: 'For checking response time',
    usage: 'ping'
};