const fetch = require("node-fetch");

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://www.facebook.com/TeguhSuwandi19/videos/5230538373729232/?mibextid=XBoEBUlHZ1eoDabU`
  let dann = await fetch(`https://api.lolhuman.xyz/api/downloader/facebook?url=${text}&apikey=DsrxE6qXIl`)
  let res = await dann.json()
  conn.sendFile(m.chat, res.data.Normal_video, 'fb.mp4', 'Nih kak', m)
}

handler.help = ['fb']
handler.tags = ['downloader']
handler.command = /^(fb(dl)?)$/i
handler.register = true
handler.limit = true

module.exports = handler