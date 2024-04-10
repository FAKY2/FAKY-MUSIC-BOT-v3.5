// index.js

const config = require('./config.js');
const { Client } = require('discord.js');

const client = new Client();

let isQueueEmpty = true;

client.on('songAdded', () => {
    isQueueEmpty = false;
    config.opt.voiceConfig.leaveOnEmpty.resetTimer();
});

client.on('songRemoved', () => {
    if (queue.length === 0) {
        isQueueEmpty = true;
        const botVoiceChannel = client.voice.connections.first()?.channel;
        if (botVoiceChannel) {
            config.opt.voiceConfig.leaveOnEmpty.startTimer(botVoiceChannel);
        }
    }
});

if (config.shardManager.shardStatus == true) {
    const { ShardingManager } = require('discord.js');
    const manager = new ShardingManager('./bot.js', { token: config.TOKEN || process.env.TOKEN });
    manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
    manager.spawn();
} else {
    require("./bot.js");
}
