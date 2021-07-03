const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  aliases: ["memberinfo", "whois"],
  description: "Informasi User!",
  usage: "Userinfo | <Mention User>",
  run: async (client, message, args) => {
    //Start
   
    let member = message.mentions.users.first() || message.member;

    const statuses = {
      online: "online",
      dnd: "do not disturb",
      idle: "idle",
      offline: "offline"
    };

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username}`)
      .setColor("#2ecc71")
      .setThumbnail(member.user.displayAvatarURL())
      .addField("**Join Date**", member.joinedAt.toDateString())
      .addField("**Create Date**", member.user.createdAt.toDateString())
      .addField("**Other Information**\n**ID**", `${member.id}`, true)
      .addField("**Name Tag**", member.user.tag, true)
      .addField("**Status**", statuses[member.presence.status], true)
    message.channel.send(embed);

    //End
  }
};
