const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hekel Member!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please Mention Orang Yang Mau Lu Hack Tolol!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`Lu gabisa hack diri sendiri paok!`);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hack Status: Selesai`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`Mampus Kena Hek Yahahaha hayukkk!`)
      .setTimestamp();

    await message.channel.send(`Hacking DiMulai! Hacking ${Member.user.username}`);

    await message.channel.send(`Hack Status: 10%`);

    await message.channel.send(`Hack Status: 20%`);

    await message.channel.send(`Hack Status: 30%`);

    await message.channel.send(`Hack Status: 40%`);

    await message.channel.send(`Hack Status: 50%`);

    await message.channel.send(`Hack Status: 60%`);

    await message.channel.send(`Hack Status: 70%`);

    await message.channel.send(`Hack Status: 80%`);

    await message.channel.send(`Hack Status: 90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};