const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["link"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle(`link Bot`)
      .setURL(
        ""
      )
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send(embed);
  }
}
