const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "roleinfo",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message) => {
let args = message.content.split(" ").slice(1).join(" ");
if (!args[0]) return message.channel.send("**Please Mention A Role!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Please Enter A Valid Role!**");
        const status = {
            false: "No",
            true: "Yes"
        }
        let roleembed = new Discord.MessageEmbed()
            .setColor("#2ecc71")
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor)
            .addField("**Members**", role.members.size)
            .addField("**Position**", role.position)
            .addField("**Mentionable**", status[role.mentionable])
              .addField("**Time Create**",role.createdAt.toLocaleString(),true)
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
 
        message.channel.send(roleembed);
    }
}
