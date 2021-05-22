if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("**You dont Have premisssion Mutevoicr** ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**I Don't Have `MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("Menition member");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("Restart");
    }
    muteMember.setMute(true);
    if (muteMember) {
      message.channel.sendMessage("Muted voice ");
    }
  }
}
