const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: 'Currently playing a Track',
          iconURL: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzVkNmJzdXRyanQ2dTNzNGVvYnZkNHc5eGh0cTB2aTFlMjB1YzJ5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yFKokXsr5Bc6xVqpTt/giphy.gif',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
        .setDescription(`\n ‎ \n▶️ **Details :** **${song?.name}**\n▶️ **Enjoy the Ultimate Music Experience. ** \n▶️ **If link breaks playback try to give query.**`)
        .setImage(queue.songs[0].thumbnail)
        .setColor('#FF0000')
        .setFooter({ text: 'More info - Use /help command [MADE BY FAKY]' });

      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}

/*
       

   
   # MADE BY FAKY!!
   ## FOR HELP CONTACT ME ON DISCORD

*/
