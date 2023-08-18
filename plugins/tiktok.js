const { Tt2 } = require('api-dylux');
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let json = await Tt2(text)
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://vm.tiktok.com/ZSLrvAXLn/`
let reel = `Username: *${json.author}*\nDescription: *${json.caption}*`
await m.reply(wait)
await conn.sendFile(m.chat, json.data.video, 'tiktok.mp4', reel, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i

module.exports = handler