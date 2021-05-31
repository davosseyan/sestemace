const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
    
   
    
  message.channel.send(``\`\`**General Commands**\nA!userinfo - Get your/someones information on Discord\nA!server - Get the server information\nA!botinfo - Ace bot info\nA!weather - To know world's weather | usage : A!weather [state/region]\nA!avatar - To get you/someones avatar\nA!serveravatar - To get server's avatar\nA!invite - To invite Ace bot to your server\nA!roles - To show role server\nA!listEmoji - Shows server's emojis list A!numberinv - For View number your invite\n\n**Moderation Commands**\nA!backup - To copy server\nA!mute - Mute someone\nA!unmute - Unmute someone\nA!ban - Ban someone in the server\nA!unban - Unban someone in the server\nA!kick - To kick someone in the server\nA!clear - Clear chat messages\nA!lock - To lock the channel from\nA!unlock - To unlock the channel from\nA!hide - A!hide <#channel> , hide channel for everyone\nA!show - A!show <#channel> , show the hiden channel\nA!vkick - To kick someone in voice\nA!vmute - To mute someones mic\nA!vunmute - Unmute the person in voice\nA!deafen - To deaf someone in the voice\nA!undeafen - Remove the deafen\nA!moveall - to move all members\nA!slowmode - Set the channel slowmode\nA!allbots - For View All bot in server\nA!roleinfo - for view role info
`\`\``);
  
    
   
    }
}
