const Command = require('../commands/Command.js');
const Characters = require('../utils/Characters.js');
var config = require('../config.json');
const fighter = require('../utils/Characters.js');
var discord_id = "";
var name = "";

class roles extends Command {
    constructor(msg, client) {
        super(msg);
        
        if (msg.guild.id == config.GUILD_ID) {
            if (msg.content.includes(" ")) {

                var input = parseInt(msg.content.split(" ")[1]); //raw text
                
                if ((input > 0) && (input < 83))  {

                    discord_id = new fighter();
                    name = new fighter();
    
                    //get discord role ID
                    var i;
                    for (i = 1; i < 83; i++) {
                        if (i == input) {
                            discord_id = Characters[i].DISCORD_ROLE;
                            name = Characters[i].DISPLAY_NAME;
                            break;
                        }
                    }
    
                    if (msg.member.roles.get(discord_id) != null) {
                        msg.member.removeRole(discord_id)
                        .then(msg.reply("You have removed the " + name + " role."))
                        .catch(console.error);
                    }
                    else {
                        msg.member.addRole(discord_id)
                        .then(msg.reply("You have added the " + name + " role."))
                        .catch(console.error);
                    }
                }
                else {
                    msg.channel.send("Invalid Role!\nPlease specify a number [1-82]\n")
                }

                
            }
            else {
                msg.channel.send("Invalid usage!\nPlease specify the role you want to tiggle.\n\nUsage: r!role 1\n")
            }

        }
    }
}