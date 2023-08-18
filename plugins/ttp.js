let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Harap Masukan Teks..'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/ttp?apikey=${global.lolhuman}&text=${args}`
  conn.sendFile(m.chat, res, 'dann.webp', `Done`, m, false)
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^(ttp)$/i
handler.limit = true
handler.premium = true

module.exports = handler