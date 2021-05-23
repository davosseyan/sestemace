const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
   
    if (!message.channel.guild)
      return message.channel.send("This is for servers only");

    const text = message.guild.channels.cache.filter(r => r.type === "text")
      .size;
    const voice = message.guild.channels.cache.filter(r => r.type === "voice")
      .size;
    const chs = message.guild.channels.cache.size;
    const avaibles = message.guild.features
      .map(features => features.toString())
      .join("\n");

    const roles = message.guild.roles.cache.size;

    const online = message.guild.members.cache.filter(
      m => m.presence.status === "online"
    ).size;

   

    const zalm = new Discord.MessageEmbed()
     .setTitle(`${guild.name} Info`)
      .setColor("BLACK")
      .addFields(
        {
          name: `🆔 **__Server ID:__**`,
          value: `${message.guild.id}`,
          inline: true
        },
        {
          name: `📆 **__Created On:__**`,
          value: message.guild.createdAt.toLocaleString(),
          inline: true
        },
        {
          name: `👑 **__Owner By:__**`,
          value: `${message.guild.owner}`,
          inline: true
        },
        {
          name: `👥 **__Members:__** (${message.guild.memberCount})`,
          value: `${online} Online`,
          inline: true
        },
        {
          name: `💬 **__Channels:__** (${chs})`,
          value: `**${text}** Text | **${voice}** Voice`,
          inline: true
        },
        {
          name: `**__Region__**:`,
          value: `${message.guild.region}`,
          inline: true
        },
        {
          name: `**__Roles__**`,
          value: `${roles}`,
          inline: true
        }
      )
      
    message.channel.send(zalm);
  }
}
