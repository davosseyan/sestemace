    if (message.member.voiceChannel == null)
      return message.channel.send(`**Go to voice and write the command**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.cache.filter(m => m.voiceChannel);
    message.guild.members.cache
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(`✅ **All in the voice moved to your voice**`);
  }
};