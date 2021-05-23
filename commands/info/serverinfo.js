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

    const idle = message.guild.members.cache.filter(
      m => m.presence.status === "idle"
    ).size;

    const offline = message.guild.members.cache.filter(
      m => m.presence.status === "offline"
    ).size;

    const dnd = message.guild.members.cache.filter(
      m => m.presence.status === "dnd"
    ).size;

    const black = new Discord.MessageEmbed()
      .setTitle("Naar Code")
      .setColor("BLACK")
      .addFields(
        {
          name: `🆔 Server ID`,
          value: `${message.guild.id}`,
          inline: true
        },
        {
          name: `📆 Created On`,
          value: message.guild.createdAt.toLocaleString(),
          inline: true
        },
        {
          name: `👑 Owner By`,
          value: `${message.guild.owner}`,
          inline: true
        },
        {
          name: `👥 Members (${message.guild.memberCount})`,
          value: `**${online}** Online \n **${message.guild.premiumSubscriptionCount}** Boosts ✨`,
          inline: true
        },
        {
          name: `💬 Channels (${chs})`,
          value: `**${text}** Text | **${voice}** Voice`,
          inline: true
        },
        {
          name: `🌍 Others`,
          value: `**Region:** ${message.guild.region}\n**Verification Level:** ${message.guild.mfaLevel}`,
          inline: true
        },
        {
          name: `🔐 Roles (${roles})`,
          value: `To see a list with all roles use . roles`,
          inline: true
        }
      )
      .setFooter("CREATED BY LORD", message.author.avatarURL());
    message.channel.send(black);
  }
}
