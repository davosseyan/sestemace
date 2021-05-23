const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
   
    const guild = message.guild;
    const channels = message.guild.channels.cache.size;
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
  let region;
        switch (message.guild.region) {
            case "europe":
                region = 'Europe';
                break;
            case "us-east":
                region = 'us-east'
                break;
            case "us-west":
                region = 'us-west';
                break;
            case "us-south":
                region = 'us-south'
                break;
            case "us-central":
                region = 'us-central'
                break;
        }
 

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

    //End
  }
};
