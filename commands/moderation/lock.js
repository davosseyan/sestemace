const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lock",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",

run: async (client, message, args) => {

if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permissions**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("**Locked Channel 🔒**")
          .addField("**Guild name:**", message.guild.name)
          .addField("**Channel:**", `<#${message.channel.id}>`)
          .addField("**Locked by:**", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
}
