module.exports = {
  TOKEN: "",
  ownerID: ["611408493274071060", ""],
  botInvite: "https://discord.com/oauth2/authorize?client_id=855807016064647179&permissions=8&scope=bot",
  supportServer: "https://discord.gg/abu8wdtq",
  mongodbURL: "mongodb+srv://shiva:shiva@cluster0.do0cdb4.mongodb.net/?retryWrites=true&w=majority",
  status: 'BY FAKY',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "1242734378250141716",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: true,
      leaveOnEmpty: {
        status: true,
        cooldown: 0,
      },

    },

    maxVol: 100,

  }
}
