const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vunmute",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
var user = message.mentions.members.first();
   
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("pewist ba role a bo anjamdane amkara");
    if (!user) return message.channel.send("please mention someone");
 
  if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("sarata rolem bare inja bakarm hena");
    var embed = new Discord.MessageEmbed() 
    .setTitle("Unmute Voice")
    .addField("Unmuted user", `${user})
    .setFooter(`Muted by <@${message.author.id}>`)
    .setTimestamp()
      user.voice.setMute(false)
    message.channel.send(embed);
 
  }
}
