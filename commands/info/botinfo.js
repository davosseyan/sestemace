const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botinfo",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args, prefix) => {

const created = moment(bot.user.createdAt).format("YYYY-MM-DD");

     
       let embed = new Discord.MessageEmbed()
        .setTitle(`Info ${client.user.username}`)
        .setColor("")
        .setThumbnail(client.user.displayAvatarURL())
        .addField(`**My Name:**`,`${client.user.tag}`)
        .addField(`**My ID**`,`${client.user.id}`)
        .addField(`**My Prefix**`,`[ ${prefix} ]`)
        .addField(`**Libary**`,`discord.js`)
        .addField(`**Discord.js Version**`,`${Discord.version}`)
        .addField(`**Created At:**`,`${created}`)
        .addField(`**Ping**`,`${Math.round(client.ws.ping)}ms`)
        .addField(`**Guilds**`,`${client.guilds.cache.size}`)
        .addField(`**Channels**`,`${client.channels.cache.size}**`)
        .addField(`**Creator**`,`[<@817049111454154752>]`)
    message.channel.send(embed);
}
}
