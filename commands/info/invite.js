const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["link"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
let embed = new Discord.MessageEmbed()
      .setColor("#2ecc71")
      .setTitle(`link Bot`)
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=794105499960082464&permissions=3275620320&scope=bot"
      )
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send(embed);
  }
}
