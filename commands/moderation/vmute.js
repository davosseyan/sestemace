const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vmute",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("You dont Have premisssion mute voice")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("I Don't Have `MUTE_MEMBERS` Permission")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("pleade mention someone");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("Restart");
    }
    muteMember.setMute(true);
    if (muteMember) {
      message.channel.sendMessage(new 
Discord.MessagEmbed()
      .setColor("")
      .setTitle(`Command : Voice Mute`)
      .addField(`**Member vmute:**`, `<@${Member.user.id}>`)
      .addField(`**vmute by:**`, `<@${message.author.id}>`)
      .setFooter(`${message.author.username}`)
      .setTimestamp()
);
    }
  }
}
