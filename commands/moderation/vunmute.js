const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vunmute",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .send("**You Need MUTE MEMBER**❌ ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**I dont`MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("please mention someone");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("Restart");
    }
    muteMember.setMute(false);
    if (muteMember) {
      message.channel.send("Un mute member");
    }
  }
}
