module.exports = {
  name: "allbots",
  aliases: [],

  run: async (client, message, args) => {
let i = 1;
    
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor("BLACK")
      .setDescription(
        `**${
          message.guild.members.cache.filter(m => m.user.bot).size
        } You were found on this server**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp();
    
    
    message.channel.send(embed);
  }
}
