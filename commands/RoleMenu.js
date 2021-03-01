var config = require('../config.json');
const Command = require('./Command.js');

const fs = require('fs');
const { Channel } = require('discord.js');
const f_name = './commands/templates/purge.json';
const encoder = 'utf8';

//Category: Embed Colors
const color = 0xFF9900; //orange (default)
const e_color = 0xFD0061; //red (error)

//Category: Roles
var guild_id = config.GUILD_ID; // Guild ID
var head_gecko = config.SELF_ID; // Myself (Blaze)

var gecko = config.GECKO_ROLE_ID; // Gecko
var admin = config.ADMIN_ROLE_ID; // Admin
var mod = config.MOD_ROLE_ID; // Mod
var friend = config.FRIEND_ROLE_ID; // Friend

//Category: Development
var docs = config.DOCUMENTATION_CHANNEL_ID; // #documentation
var templates = config.TEMPLATES_CHANNEL_ID; // #templates
var response = config.RESPONSE_CHANNEL_ID; // #response
var format = config.FORMAT_CHANNEL_ID; // #format

//Category: Important
var welcome = config.WELCOME_CHANNEL_ID; // #welcome
var announcements = config.ANNOUNCEMENT_CHANNEL_ID; // #announcements
var changelog = config.CHANGELOG_CHANNEL_ID; // #changelog
var boosts = config.BOOSTS_CHANNEL_ID; // #boosts
var roles = config.ROLE_CHANNEL_ID; // #roles

//Category: Text Channels
var general = config.GENERAL_CHANNEL_ID; // #general
var bot_cmds = config.BOT_CMDS_CHANNEL_ID; // #bot-cmds

//Category: Voice Channels
var vc_1 = config.VC1_ID; // #vc-1
var vc_2 = config.VC2_ID; // #vc-2
var vc_afk = config.VCAFK_ID; // #vc-afk

//Category Arenas (Defaults Only)
var arena_1 = config.A1_ID; // #arena-1
var arena_2 = config.A2_ID; // #arena-2
var arena_3 = config.A3_ID; // #arena-3
var arena_4 = config.A4_ID; // #arena-4


class RoleMenu extends Command {
    constructor(msg, client) {
      super(msg);
      if ((msg.member.roles.cache.has(admin))) {
        if (msg.channel.id === output) {

            try {
                        
                fs.readFile('./commands/templates/rolemsg.json', 'utf8', function(err, data) {
                if (err) throw err;
                var obj = JSON.parse(data);
                for (var i = 0; i < obj.length; i++) {
                    for (var j = 0; j < obj[i].length; j++) {

                        

                        msg.channel.send(":white_check_mark: Generated Text Element for node \"" + "*mongodb.blazethesnep.trecco.chnanel.roles.node*" + "\"");
                        msg.channel.send("*(( To view these changes go to channel* <#" + roles + "> *))*");


                        //cleaner embed builder maybe? (2/28/2021) (Blaze)
                        msg.channel.send({
                        embed: {
                            author: {
                            name: obj[i][j].name,
                            },
                            title: obj[i][j].title,
                            color: color,
                            description: obj[i][j].description,
                        }
                        });

                        //found = true;
                        break;

                    } //end of inner for loop
                    
                    /*
                    if (found == false) {
                        //add random array to select elements out of
                        var insertme = other_words[Math.floor(Math.random() * other_words.length)];
                        msg.channel.send("*Depressed Gecko Noises...*\n:x: Command was not found!\n\nSorry but Geckos don't speak French...\nTrecco thought you typed **\"" + insertme + "**\"");
                    }
                    */
                    }
                });

            } catch (e) {
                console.log(e);
                }

            }

            //Invalid Channel Error Embed
            else {
                msg.channel.send({
                embed: {
                    author: {
                    name: "[ERR13] TreccoBot has detected an issue!",
                    },
                    title: "Reason ➔ Unauthorized User",
                    color: e_color,
                    description: "\n\nYou cannot execute this command!\nStaff have been notified of this event.\nIf this is bug, please contact an admin immediately.",
                }
            });
        }
    }
    //Invalid Permissions
    else {
        msg.channel.send({
        embed: {
            author: {
            name: "[ERR171] TreccoBot has detected an issue!",
            },
            title: "Reason ➔ Missing Permission Node(s)",
            color: e_color,
            description: "\n\nYou can't execute this command.\nYou are missing node \"" + "*mongodb.blazethesnep.trecco.auth.admin*\"" + "\nIf this is bug, please contact an admin immediately.",
        }
     });
    }
  }
}

module.exports = RoleMenu;