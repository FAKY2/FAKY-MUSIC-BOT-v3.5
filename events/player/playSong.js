const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: 'Currently playing a Track',
          iconURL: 'https://c.top4top.io/p_3025ox6di1.gif',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
        .setDescription(`\n ‎ \n▶️ **Details :** **${song?.name}**\n▶️ **Enjoy the Ultimate Music Experience. ** \n▶️ **If link breaks playback try to give query.**`)
        .setImage(queue.songs[0].thumbnail)
        .setColor('#059ef7')
        .setFooter({ text: 'More info - Use /help command [MADE BY FAKY]' });

      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}

/*
       

   
   # MADE BY FAKY!!
   ## FOR HELP CONTACT ME ON DISCORD

*/
