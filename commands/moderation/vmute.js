const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vmute",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, msg, args) => {
var muteUser = msg.mentions.members.first();
   
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("YOU DON'T HAVE ENOUGH PERMISSION TO DO ID");
    if (!muteUser) return msg.channel.send("کەسێک دیاری بکە ");
 
  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("I DON'T HAVE ENOUGH PERMISSION TO DO IT");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Mute Voice")
    .addField("Muted user", muteUser)
    .setFooter(`Muted by ${msg.author.tag}`)
    .setTimestamp()
      muteUser.voice.setMute(true)
    msg.channel.send(muteEmbed);
 
  }
}
