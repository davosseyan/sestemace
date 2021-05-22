let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle(bot.reva.get(data.lang, "general","invite_embed"))
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=797839831316824074&permissions=8&scope=bot"
      )
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send(embed);
  }
}
