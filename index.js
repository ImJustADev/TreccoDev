require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = process.env.TOKEN;

client.login(TOKEN);

cleint.on('ready', () => {
    console.info('Logged in as ${bot.user.tag}!');
});