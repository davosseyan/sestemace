const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "numberinvite",
  aliases: ["invites"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
try {
            let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

            let invites = await message.guild.fetchInvites()

            let memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);

            if (memberInvites.size <= 0) {
                return message.channel.send(`**${member.displayName} didn't invite anyone to the server!**`, (member === message.member ? null : member));
  {}          }

            let content = memberInvites.map(i => i.code).join("\n");
            let index = 0;
            memberInvites.forEach(invite => index += invite.uses);

            let embed = new Discord.MessageEmbed()
                .setColor("#2ecc71")
                .setFooter(message.guild.name, message.guild.iconURL())
                .setAuthor(`Invite Tracker for: ${message.guild.name}`)
                .setDescription(`Information on Invites of:  ${member.displayName}`)
                .addField("**Invited Persons**", index)
                .addField("Invitation Codes\n\n", content);
            message.channel.send(embed);
        } catch (e) {
            return message.channel.send(e.message)
        }
    }
};
