const Command = require('./Command.js');
const color = 0xFF9900;

class Profile extends Command {
  constructor(msg) {
    super(msg);
    msg.channel.send({
      embed: {
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        title: "Profile",
        color: color
      }
    });
  }
}

module.exports = Profile;