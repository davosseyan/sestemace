const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botinfo",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, msg, args) => {
const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username,client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setColor("")
.setTitle(` ${client.user.username} `)
.addField('servers', `**${client.guilds.cache.size}**`, true)
.addField('channels', `**${client.channels.cache.size}**`, true)
.addField('Users', `**${client.users.cache.size}**`, true)
.addField('My Name' , `**${client.user.tag}**` , true)
.addField('My ID' , `**${client.user.id}**` , true)
.addField('Owner Bot',`Robot.MAX`,true)

msg.channel.send(embed);
}
}
