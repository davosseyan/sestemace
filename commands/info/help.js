const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
    
   
    
    let embed = new MessageEmbed()
    .setColor("")
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`Use ${Prefix}Help <Nama Command> Untuk Informasi Lebih Banyak Tentang Command!` + 
    "\n\n**Fun**\n`Avatar, Coinflip, Howgay, Meme, Rate, 8ball, Dicksize, Ascii, Choose, Hack, Randomnumber`" + "\n\n" + "**Moderation**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns`" + "\n\n"+
    "**Information**\n`Help, Covid, Weather, Userinfo, Serverinfo, Ping`")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    message.channel.send(embed);
    }
}
