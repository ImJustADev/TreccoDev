const Discord = require('discord.js');
const client = new Discord.Client();

//move options to config file later (2/28/2021) (Blaze)
var config = require('./config.json');
const Logger = require('./utils/Logger.js');
const Roles = require('./roles/Roles.js');
const Coin = require('./commands/Coin.js');
const Color = require('./templates/Color.js');
const ServerInfo = require('./commands/ServerInfo.js');
const RoleMenu = require('./commands/RoleMenu.js');
const PurgeChannel = require('./commands/PurgeChannel.js');

const color = 0xFF9900;
var npm = require('./package.json');
const Help = require('./commands/Help');

const build = npm.version;
const prefix = "g!";

client.on('ready', () => {

    new Logger('Build ' + build);
    client.user.setPresence({
        activity: { name: 'Lounging Around'  }, status: 'online' })
        .then(console.log)
        .catch(console.error);
    
    new Logger(" Discord Client Status: SUCCESS..");
    switch (client.user.username) {
        case "Trecco":
             new Logger(Color.colorCodes.GREEN + "Logged in as " + Color.colorCodes.WHITE + "Trecco" + Color.colorCodes.RESET);
             break;
         default:
              new Logger(Color.colorCodes.GREEN + "Logged in as " + Color.colorCodes.WHITE + client.user.username);
     }

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
                                icon_url: "https://raw.githubusercontent.com/ImJustADev/TreccoDev/main/misc/github-favicon.png",
                            },
                            title: "Trecco The Gecko",
                            url: "https://github.com/imjustadev/TreccoDev/",
                            color: color,
                            description: "Bot Version: **" + build + "**\n\nView the original project source code here\nfor Trecco The Gecko Discord Bot\n\nAuthor: BlazeTheSnep\nDiscord: Blaze#0069\nTwitter: @BlazeTheSnep",
                        }
                    });
                }

                //clean code to map<> (2/28/2021) (Blaze)

                else if (input.startsWith("role")) {
                    new Roles(msg);
                }
                else if (input.startsWith("rm")) {
                    new RoleMenu(msg);
                }
                else if (input.startsWith("purge")) {
                    new PurgeChannel(msg);
                }
                else if (input == "coin" || input == "c") {
                    new Coin(msg);
                }
                else if (input.startsWith("serverinfo")) {
                    new ServerInfo(msg);
                }
                
            }
        } catch (e) {
            console.log(e);
        }
    });

    client.on("guildMemberAdd", member => {
        const channel = getDefaultChannel(member.guild);
        channel.send(`Welcome ${member} to the server!`);
      });

});

if (process.env.TOKEN != undefined) {        
    client.login(process.env.TOKEN);
}
else {
    client.login(config.TOKEN);
}