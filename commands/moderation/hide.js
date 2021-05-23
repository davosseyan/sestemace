const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hide",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
 if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`
      );
    channel_find.updateOverwrite(message.guild.id, {
      READ_MESSAGES: false
    })
 .then(() => {
    message.channel.send(`**Done Has Been Hide Channel**`);
    });
  }
}
