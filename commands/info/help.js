const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
    
   
    
  message.channel.send(`\`\`\`[vote]()
**General Commands**
r!userinfo - Get your/someones information on Discord
r!server - Get the server information
r!botinfo - Zalm bot info
r!weather - To know world's weather | usage : A!weather [state/region]
r!avatar - To get you/someones avatar
r!serveravatar - To get server's avatar
r!invite - To invite Ace bot to your server
r!roles - To show role server
r!listEmoji - Shows server's emojis list A!numberinv - For View number your invite
**Moderation Commands**
r!backup - To copy server
r!mute - Mute someone
r!unmute - Unmute someone
r!ban - Ban someone in the server
r!unban - Unban someone in the server
r!kick - To kick someone in the server
r!clear - Clear chat messages
r!lock - To lock the channel from
r!unlock - To unlock the channel from
r!hide - A!hide <#channel> , hide channel for everyone
r!show - A!show <#channel> , show the hiden channel
r!vkick - To kick someone in voice
r!vmute - To mute someones mic
r!vunmute - Unmute the person in voice
r!deafen - To deaf someone in the voice
r!undeafen - Remove the deafen
r!moveall - to move all members
r!slowmode - Set the channel slowmode
r!allbots - For View All bot in server
r!roleinfo - for view role info
\`\`\``);
  
    }
}
