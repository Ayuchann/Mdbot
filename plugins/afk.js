let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let thumb = 'https://telegra.ph/file/117af291ca5c36c21c558.jpg'
  let reel = `${conn.getName(m.sender)} Sekarang AFK${text ? ': ' + text : ''}`
  conn.sendMessage(m.chat, {
    text: reel,
    contextInfo: {
    externalAdReply: {
   showAdAttribution: true,
    title: namebot,
    body: wm,
    thumbnailUrl: thumb,
    sourceUrl: syt,
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, { quoted: m})

}
handler.help = ['afk <alasan>']
handler.tags = ['main']
handler.command = /^afk$/i
handler.limit = true

module.exports = handler