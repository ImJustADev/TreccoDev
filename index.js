const Discord = require('discord.js');
const client = new Discord.Client();

client.login("ODEyNzIzMDgyMTI0MTk4MDAw.YDE5Wg.pX7c1PFkwv6mS7afCWvQPkNDJhc");

client.on('ready', () => {
    console.info('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');
    }
});