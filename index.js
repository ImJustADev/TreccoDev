const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config.json');
const Logger = require('./utils/Logger.js');
const Roles = require('./roles/Roles.js');

var npm = require('./package.json');
const Help = require('./commands/Help');

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
                    new Help(msg);
                } 
                else if (input == "github") {
                    msg.channel.send({
                        embed: {
                            author: {
                                name: "GitHub",
                                icon_url: "https://raw.githubusercontent.com/imjustadev/TreccoDev/main/misc/github-favicon.png"
                            },
                            title: "Trecco The Gecko",
                            url: "https://github.com/imjustadev/TreccoDev/",
                            color: color,
                            description: "View the original project source code",
                        }
                    });
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
    client.login(config.TOKEN);
}