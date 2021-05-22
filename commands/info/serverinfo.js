const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
   
   
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
  

    const embed = new MessageEmbed()
      .setTitle(guild.name + " Info")
      .setColor("")
      .setThumbnail(guild.iconURL())
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Owner`, `${guild.owner.user.tag}`, true)
      .addField(`Roles Count`, Roles, true)
      .addField(`Emojis Count`, Emojis, true)
      .addField(`Members Count`, Members, true)
      .addField(`Humans Count`, Humans, true)
      .addField(`Bots Count`, Bots, true)
      .addField(`Server Created At`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
