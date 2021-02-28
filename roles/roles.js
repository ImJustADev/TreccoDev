const Command = require('../commands/Command.js');
const Logger = require('../utils/Logger.js');
var config = require('../config.json');
const Fighter = require('../templates/Fighter.json');
const { User } = require('discord.js');


var key = {};

//define list bounds
var min = 1;
var max = 87;

var json_input;
var int_input;

var display;
var discord_id;

class Roles extends Command {
    constructor(msg, client) {
        super(msg);

        if (msg.guild.id == config.GUILD_ID) {
            if (msg.content.includes(" ")) {

                json_input = JSON.stringify(msg.content.split(" ")[1]);
                int_input = parseInt(msg.content.split(" ")[1]); //raw text
                
                if ((int_input >= min) && (int_input <= max))  {
                    
                    //get discord role ID
                    for (const key in Fighter.fighter_object) {
                        console.log('${key}: ${fighter_object[key]} (${typeof(key)})');
                    }

                    display = Fighter.fighter_object['json_input'].DISPLAY_NAME;
                    discord_id = Fighter.fighter_object['json_input'].DISCORD_ROLE;
    

                    if (msg.member.roles.cache.has(discord_id)) { //not null

                        msg.member.roles.remove(discord_id).catch(console.error)
                        .then(msg.channel.send(":x: The role **" + display + "** was removed from your profile **" + msg.author.username + "**."))
                        .catch(console.error);

                    }
                    else {
                        msg.member.roles.add(discord_id).catch(console.error)
                        .then(msg.channel.send(":white_check_mark: The role **" + display + "** was added to your profile **" + msg.author.username + "**."))
                        .catch(console.error);
                    }
                }
                else {
                    msg.channel.send(":x: Trecco does not understand what you said.\nFor helpful command usage, type g!help roles\n")
                }

                
            }
            else {
                msg.channel.send(":x: Trecco has detected foul play [**Invalid Usage**]\n\nPlease specify the role you want added/removed.\n\n*Usage Example*\n`g!roles 1`\n\n**Available Roles**\nPlease look at <#814179912780087318> to view all available roles.")
            }

        }
    }
}

module.exports = Roles;