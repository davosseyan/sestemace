const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  aliases: [],
  description: "Kick A Member!",
  usage: "Kick <Mention Member>",
  run: async (client, message, args) => {
    //Start
   
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Kick!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Mention A Valid Member!`);

    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Kick Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Kick Me ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't Kick Owner Of Server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.kickable)
      return message.channel.send(`I Can't Kick That Member!`);

    try {
      console.log(`Member Is Going To Get Kick!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "There was no reason!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor("#2ecc71")
        .setTitle(`Command : Kick`)
        .addField(`**Member kick:**`, `<@${Member.id}>`)
        .addField(`**kicked by:**`, `<@${message.author.id}>`)
        .addField(`**Reason:**`, `${Reason || "There was no reason!"}`)
        .setFooter(`${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `You Have Been Kicked From **${message.guild.name}** For ${Reason ||
            "There was no reason!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} Just Got Kicked From ${
          message.guild.name
        } For ${Reason || "There was no reason!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `I Can't Kick That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};
