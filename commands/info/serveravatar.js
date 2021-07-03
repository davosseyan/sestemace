const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serveravatar",
  aliases: ["sv"],
  description: "Foto Profil / Avatar!",
  usage: "Avatar | <Mention Member>",
  run: async (client, message, args) => {
    //Start 
    
    let embed = new Discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("#2ecc71")
    
      message.channel.send(embed)
    
  }
}
