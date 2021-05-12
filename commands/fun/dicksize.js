const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "dicksize",
  aliases: ["dick", "pp", "peler"],
  description: "Ukuran titid lu!",
  usage: "Dicksize <Mention Member>",
  run: async (client, message, args) => {
    //Start
   
    let sizes = [
      "8D",
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8===============D",
      "8================D",
      "8==================D"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Itu titid ajg`)
      .setDescription(`${Member.user.username} Ini kontol lu?\n${Result}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
