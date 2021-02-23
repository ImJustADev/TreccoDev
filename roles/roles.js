const Command = require('../commands/Command.js');
const Logger = require('../utils/Logger.js');
var config = require('../config.json');
const Fighter = require('../templates/Fighter.js');

var input; //user input

//define list bounds
var min = 1;
var max = 82;

var input;

var display;
var discord_id;

class Roles extends Command {
    constructor(msg, client) {
        super(msg);

        if (msg.guild.id == config.GUILD_ID) {
            if (msg.content.includes(" ")) {

                input = parseInt(msg.content.split(" ")[1]); //raw text
                
                if ((input >= min) && (input <= max))  {
                    
                    //get discord role ID

                    switch(input) {
                        case 1:
                            display = Fighter.fighter_object[1].DISPLAY_NAME;
                            discord_id = Fighter.fighter_object[1].DISCORD_ROLE;

                            break;
                        case 2:
                            display = Fighter.fighter_object[2].DISPLAY_NAME;
                            discord_id = Fighter.fighter_object[2].DISCORD_ROLE;

                            break;
                        default:
                            msg.reply("That role has not been set up yet!");
                            break;
                    }

    

                    if (msg.member.roles.cache.has(discord_id)) { //not null

                        msg.member.roles.remove(discord_id).catch(console.error)
                        .then(msg.reply("You have removed the " + display + " role."))
                        .catch(console.error);

                    }
                    else {
                        msg.member.roles.add(discord_id).catch(console.error)
                        .then(msg.reply("You have added the " + display + " role."))
                        .catch(console.error);
                    }
                }
                else {
                    msg.channel.send("Invalid Role!\nPlease specify a number [1-83]\n")
                }

                
            }
            else {
                msg.channel.send(":x: **Invalid usage!**\nPlease specify the role you want to toggle.\n\n*Usage Example*\n`g!role 1`\n\n**Available Roles**\n```\n1 - Mario\n2 - Donkey Kong\n```")
            }

        }
    }
}

module.exports = Roles;