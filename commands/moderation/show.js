const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "show",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
 if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `You Don't have the permission : \`MANAGE_CHANNELS\``
      );
    let channel = message.mentions.channels.first();
    let channel_find = message.guild.channels.cache.find(
      ch => ch.id == channel
    );
    if (!channel)
      return message.channel.send(
        `**True Use CMD: A!show \`<MentionChannel>\`**`
      );
    if (!channel_find)
      return message.channel.send(`**:x: | Error, Not Found**`);
    channel.updateOverwrite(message.guild.id, {
      READ_MESSAGES: true
    });
    message.channel.send(`**Done Has Been Showed Channel**`);
  }
}
