module.exports = {
  TOKEN: "",
  ownerID: ["611408493274071060", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://youtube:youtube123@youtubedatabase.rvezx.mongodb.net/BestBot",
  status: 'BY FAKY',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "1212067144775508018",


  sponsor: {
    status: true,
    url: "https://www.youtube.com",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume", "leave"],
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
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle','leave']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: true,
      leaveOnEmpty: {
        status: true,
        cooldown: 5,
      },

    },

    maxVol: 100,

  }  
}

