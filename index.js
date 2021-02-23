const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./');
client.login(token);

client.on('ready', () => {
    console.info('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');
    }
});