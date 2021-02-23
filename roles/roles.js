const Command = require('../commands/Command.js');
var config = require('../config.json');
const Characters = require('../utils/Characters.js');

class Roles extends Command {
    constructor(msg, client) {
        super(msg);
        
        if (msg.guild.id == config.GUILD_ID) {
            if (msg.content.includes(" ")) {

                var input = parseInt(msg.content.split(" ")[1]); //raw text
                
                if ((input > 0) && (input < 83))  {
    
                    //get discord role ID
                    var i;
                    for (i = 1; i < 83; i++) {
                        if (i == input) {
                            discord_id = new Characters().DISCORD_ROLE; //fix Characters.js
                            var char_name = new Characters().DISPLAY_NAME;
                            break;
                        }
                    }
    
                    if (msg.member.roles.get(discord_id) != null) {
                        msg.member.removeRole(discord_id)
                        .then(msg.reply("You have removed the " + char_name + " role."))
                        .catch(console.error);
                    }
                    else {
                        msg.member.addRole(discord_id)
                        .then(msg.reply("You have added the " + char_name + " role."))
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

module.exports = Roles;