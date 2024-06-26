const config = require("../config.js");
const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    if (config.mongodbURL || process.env.MONGO) {
        const { REST } = require("@discordjs/rest");
        const { Routes } = require("discord-api-types/v10");
        const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);

        (async () => {
            try {
                await rest.put(Routes.applicationCommands(client.user.id), {
                    body: await client.commands,
                });
                console.log('\x1b[36m%s\x1b[0m', '|    🚀 Commands Loaded!')
            } catch (err) {
                console.log('\x1b[36m%s\x1b[0m', '|    🚀 Commands Distracted!');
            }
        })();

        console.log('\x1b[32m%s\x1b[0m', `|    🌼 Logged in as ${client.user.username}`);

        const statusMessages = ['/help', '/Help'];
        let statusIndex = 0;

        setInterval(() => {
            client.user.setActivity({
                name: statusMessages[statusIndex],
                type: ActivityType.Listening
            });
            statusIndex = (statusIndex + 1) % statusMessages.length;
        }, 15000);

        client.user.setPresence({
            status: "idle"
        });

        client.errorLog = config.errorLog;
    } else {
        console.log('\x1b[36m%s\x1b[0m', `|    🍔 Error MongoDB!`);
    }
    console.log('\x1b[36m%s\x1b[0m', `|    🎯 Activity successfully set!`);

    if (client.config.voteManager.status === true && client.config.voteManager.api_key) {
        const { AutoPoster } = require('topgg-autoposter');
        const ap = AutoPoster(client.config.voteManager.api_key, client);
        ap.on('posted', () => {});
    }
};
