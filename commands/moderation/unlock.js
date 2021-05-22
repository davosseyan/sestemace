    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("** Unlocked Channel 🔓**")
          .addField("Guild name", message.guild.name)
          .addField("Channel", message.channel.name)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
}
