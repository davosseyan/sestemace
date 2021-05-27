const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vunmute",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, msg, args) => {
var unmuteUser = msg.mentions.members.first();
   
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("pewist ba role a bo anjamdane amkara");
    if (!muteUser) return msg.channel.send("kasek mention bka");
 
  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("sarata rolem bare inja bakarm hena");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Unmute Voice")
    .addField("Unmute user", unmuteUser)
    .setFooter(`Unmuted by ${msg.author.tag}`)
    .setTimestamp()
      unmuteUser.voice.setMute(false)
    msg.channel.send(muteEmbed);
 
  }
}
