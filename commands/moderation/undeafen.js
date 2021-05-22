const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "undeafen",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, msg, args) => {
var deafuser = msg.mentions.members.first();
    var muteReason = msg.content.slice(prefix.length + 27);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("pewist ba role a bo anjamdane amkara");
    if (!deafuser) return msg.channel.send("kasek mention bka");
 
  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("sarata rolem bare inja bakarm hena");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Undeafen")
    .addField("Undeafen user", deafuser)
    .setFooter(`Undeafen by ${msg.author.tag}`)
    .setTimestamp()
      deafuser.voice.setDeaf(false)
    msg.channel.send(muteEmbed);
 
  }
}
