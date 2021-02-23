const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config.json');
const Logger = require('./utils/Logger.js');
const Roles = require('./roles/Roles.js');

var npm = require('./package.json');


const build = npm.version;
const prefix = "g!";


client.on('ready', () => {

    new Logger("Client is ready");
    switch (client.user.username) {
        case "BlazeTheSnep":
            new Logger("Logged in as " + YELLOW + "Blaze");
            break;
        default:
            new Logger("Logged in as " + client.user.username);
    }

    new Logger('Build ${build}');
    client.user.setPresence({
        status: 'online',
        afk: false,
        game: {
            name: "g!help for commands"
        }
});


    client.on('message', msg => {
        try {
            if (msg.content.toLowerCase().startsWith(prefix) && msg.author.bot != true) {
                var input = msg.content.toLowerCase().substring(prefix.length);
                if (input.startsWith("help")) {
                    new Logger('Do stuff');
                }
                else if (input.startsWith("role")) {
                    new Roles(msg);
                }
                
            }
        } catch (e) {
            console.log(e);
        }
    });
});

if (process.env.TOKEN != undefined) {        
    client.login(process.env.TOKEN);
}
else {
    client.log(config.TOKEN);
}