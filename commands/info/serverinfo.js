const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
   const text = message.guild.channels.cache.filter(r => r.type === "text")
       .size;
     const voice = message.guild.channels.cache.filter(r => r.type === "voice")
       .size;
     const guild = message.guild;
     const channels = message.guild.channels.cache.size;
     const Roles = guild.roles.cache.size || "No Roles!";
     const Members = guild.memberCount;

    const embed = new MessageEmbed()
       .setTitle(guild.name + " Info")
       .setColor("")
       .setThumbnail(guild.iconURL())
       .addField(`🆔**__Server ID:__**`, `${guild.id}`, true)
       .addField(`📆**__Created On:__**`, guild.createdAt.toDateString())
       .addField(`👑**__Owned by:__**`, `${message.guild.owner}`, true)
       .addField(`👥**__Members:__**`, Members, true)
       .addField(`**__Server Online__**`, `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size}`)
       .addField(`💬**__Channels:__**`, `(${channels})`)
       .addField(`**__Region__**:`, region, true)
       .addField(`**__Roles__**`, Roles, true)

     message.channel.send(embed);
  }
}
