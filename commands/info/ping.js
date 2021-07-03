const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start
   

    const embed = new MessageEmbed()
      .setColor("#2ecc71")
      .setDescription(`Pong ${client.ws.ping} ms`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
