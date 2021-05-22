  run: async (client, message, args) => {
    
    let embed = new Discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("BLACK")
    
      message.channel.send(embed)
    
  }
}
