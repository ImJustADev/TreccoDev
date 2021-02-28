const Command = require('./Command.js');
const other_words = ["Robery", "Kidnap", "Hug", "Fruitcake", "Murder", "Octapus", "Hitman", "Stab", "Love", "Motivation", "AK-47", "Knife"];
const fs = require('fs');

const color = 0xFF9900;
const admin_id = "812581568311984178"; //admin discord id
const rchannel_id = "814179912780087318"; //role discord channel id


class RoleMenu extends Command {
    constructor(msg) {
      super(msg);
      if ((msg.member.roles.cache.has(admin_id))) {
        try {

            /* DEPRICATED
            var parsable = msg.content.split(" ")[1]; 
            if (parsable.startsWith("g!")) { 
            parsable = parsable.substring(2); 
            }
        
            if (parsable == "subsection") { // Special case
            parsable = "subsection";
            }
            */
    
            //var found = false;
            fs.readFile('./commands/templates/rolemsg.json', 'utf8', function(err, data) {
            if (err) throw err;
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                for (var j = 0; j < obj[i].length; j++) {
                
                //if (obj[i][j].name.toLowerCase() == parsable.toLowerCase()) {

                    msg.reply(":white_check_mark: Generated Text Element for node \"" + "*roles.info*" + "\"");
                    msg.channel.send("*(( To view these changes go to channel* <#814179912780087318> *))*");

                    msg.channels.cache.get(rchannel_id).send({
                    embed: {
                        author: {
                        name: "Help"
                        },
                        title: "**g!" + obj[i][j].title + "**",
                        color: color,
                        description: obj[i][j].text,
                    }
                    });
                    found = true;
                    break;
                    }
                }

            /*
            if (found == false) {
                //add random array to select elements out of
                var insertme = other_words[Math.floor(Math.random() * other_words.length)];
                msg.channel.send("*Depressed Gecko Noises...*\n:x: Command was not found!\n\nSorry but Geckos don't speak French...\nTrecco thought you typed **\"" + insertme + "**\"");
            }
            */
           
            })
        } catch (e) {
            console.log(e);
            }
        }

        //No Perms
        else {
            msg.reply(":x: Sorry, I can't let you do that! [ Missing permission node \"" + "**trecco.bot.admin**\" ]");
        }
    }
}

module.exports = RoleMenu;