fighter_obj =  require('../templates/Fighter.js');
const Command = require('../commands/Command.js');
var config = require('../config.json');
const { fighter_obj } = require('../templates/Fighter.js');

var input; //user input

//define list bounds
var min = fighter_obj.min_val;
var max = fighter_obj.max_val;

var guild_id = config.GUILD_ID;

var display;
var discord_id;

class Roles extends Command {
    constructor(msg, client) {
        super(msg);

        
        if (msg.guild.id == guild_id) {
            if (msg.content.includes(" ")) {

                input = parseInt(msg.content.split(" ")[1]); //raw text
                
                if ((input > min) && (input < max))  {
                    
                    //get discord role ID
                    display = fighter_obj[input].DISPLAY_NAME;
                    discord_id = fighter_obj[input].DISCORD_ROLE;
    
                    user_role = msg.member.roles.get(discord_id);

                    if (user_role) { //not null

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