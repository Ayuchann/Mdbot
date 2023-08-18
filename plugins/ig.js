const fetch = require("node-fetch");

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command}`
  let dann = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolhuman}&url=${text}`)
  let res = await dann.json()
  conn.sendFile(m.chat, res.result, 'ig.mp4', 'Nih kak', m)
}

handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?)$/i
handler.register = true
handler.limit = true

module.exports = handler