/*
# MADE BY FAKY!!
 ## FOR HELP CONTACT ME ON DISCORD
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://discord.gg/FUEHs7RCqz0202254889';
      const InstagramLink = 'https://www.instagram.com/mahmoud.elfakii/';
      const invitelink = 'https://discord.com/oauth2/authorize?client_id=1213700667374571620&permissions=35878012935248&scope=bot';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157310253520662638/2443-iconperson.png?ex=651824aa&is=6516d32a&hm=0becc4a0fda01e5a02a63cf098db30c287e60a474f8d2da4ddeae7f47d98a5a3&',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
            .setDescription(`__**About me**__:\n\n ▶️ Myself FAKY. I am a discord bot developer and web developer. if u found any bug or issue on the bot pls contact me. You will get faster replies on instagram than other social media. Feel free to contact me!\n YouTube :  [not available yet](${youtubeLink})\n Instagram :  [FAKY](${InstagramLink})\n invite :  [invite](${invitelink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
/*

   
   # MADE BY FAKY!!
   ## FOR HELP CONTACT ME ON DISCORD
  
*/
