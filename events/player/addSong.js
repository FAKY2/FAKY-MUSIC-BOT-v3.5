const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
        name: 'Added To Queue',
        iconURL: 'https://d.top4top.io/p_3000mjl4k1.gif',
        iconURL: 'https://d.top4top.io/p_3000mjl4k1.gif', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
        .setDescription(`<@${song.user.id}>, **${song.name}**`)
        .setColor('#14bdff')
        .setFooter({ text: 'Use /queue for more Information' });
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}


/*      

   
   # MADE BY FAKY!!
   ## FOR HELP CONTACT ME ON DISCORD
   
*/
