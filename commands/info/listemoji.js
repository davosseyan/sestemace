const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "listemoji",
  aliases: ["emojilist"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
try {
    let notAnimated = [];
    let animated = [];
    
    message.guild.emojis.cache.forEach(async emoji => {
      if (emoji.animated) animated.push(emoji.toString());
      else notAnimated.push(emoji.toString());
    });

    if (!animated[0]) animated = ['None'];
    if (!notAnimated[0]) notAnimated = ['None'];
    
    message.channel.send('Animated:\n' + animated.join(' ') + '\n\nNot Animated' + notAnimated.join(' '));
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
}}
