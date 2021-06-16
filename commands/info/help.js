const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
    
   
    
  message.channel.send(`\`\`\`[vote]()
**General Commands**
A!userinfo - Get your/someones information on Discord
A!server - Get the server information
A!botinfo - Ace bot info
A!weather - To know world's weather | usage : A!weather [state/region]
A!avatar - To get you/someones avatar
A!serveravatar - To get server's avatar
A!invite - To invite Ace bot to your server
A!roles - To show role server
A!listEmoji - Shows server's emojis list A!numberinv - For View number your invite
**Moderation Commands**
A!backup - To copy server
A!mute - Mute someone
A!unmute - Unmute someone
A!ban - Ban someone in the server
A!unban - Unban someone in the server
A!kick - To kick someone in the server
A!clear - Clear chat messages
A!lock - To lock the channel from
A!unlock - To unlock the channel from
A!hide - A!hide <#channel> , hide channel for everyone
A!show - A!show <#channel> , show the hiden channel
A!vkick - To kick someone in voice
A!vmute - To mute someones mic
A!vunmute - Unmute the person in voice
A!deafen - To deaf someone in the voice
A!undeafen - Remove the deafen
A!moveall - to move all members
A!slowmode - Set the channel slowmode
A!allbots - For View All bot in server
A!roleinfo - for view role info
\`\`\``);
  
    }
}
