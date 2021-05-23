const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
   
        const guild = message.guild;
     const channels = message.guild.channels.cache.size;
     const Roles = guild.roles.cache.size || "No Roles!";
     const Members = guild.memberCount;
