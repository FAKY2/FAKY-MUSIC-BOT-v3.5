const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
        name: 'Added To Queue',
        iconURL: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzVkNmJzdXRyanQ2dTNzNGVvYnZkNHc5eGh0cTB2aTFlMjB1YzJ5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yFKokXsr5Bc6xVqpTt/giphy.gif',
        iconURL: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzVkNmJzdXRyanQ2dTNzNGVvYnZkNHc5eGh0cTB2aTFlMjB1YzJ5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yFKokXsr5Bc6xVqpTt/giphy.gif', 
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
