const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "deafen",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {   
var deafuser = message.mentions.members.first();
   
    if (!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.send("You don‘t have a \`DEAFEN_MEMBERS\`");
    if (!deafuser) return message.channel.send("mention someone");
 
  if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I don‘t have a \`DEAFEN_MEMBERS\`");
   
 let Reason = args.slice(1).join(" ") || "No Reason Provided!";

   
      var embed = new Discord.MessageEmbed()
        .setColor("")
        .setTitle(`Command : Clear`)
        .addField(`**Cleared by:**`, `<@${message.author.id}>`)
        .addField(`**Channel:**`, `<#${message.channel.id}>`)
        .addField(`**Deleted Messages:**`, `${Message.size}`)
        .addField(`**Reason:**`, `${Reason}`)
        .setFooter(`${message.author.username}`)
        .setTimestamp();
      deafuser.voice.setDeaf(true)
    message.channel.send(embed);
 
  }
}
