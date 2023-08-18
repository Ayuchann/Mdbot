var fetch = require ('node-fetch')

var handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/tiktok?url=${text}&apikey=Gwreelly`)
  let json = await res.json()
  let cap = `*Username:* ${json.data.username}\n*Description:* ${json.data.description}
`
  //conn.sendMessage(m.chat, { video: { url: json.data.video_HD }, caption: cap }, { quoted: m })
  conn.sendMessage(m.chat, { audio: { url: json.data.audio }, mimetype: 'audio/mp4' }, { quoted : m })
  }
handler.help = ['ttaudio']
handler.tags = ['downloader']
handler.command = /^tiktokmp3|ttaudio|ttmp3$/i
handler.limit = true

module.exports = handler