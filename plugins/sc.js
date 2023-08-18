let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './mp3/jangan.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [10,20,30,40,50,12,13,16,91,7] }, { quoted: m })
 }
handler.customPrefix = /^(sc|script)$/i
handler.command = new RegExp

module.exports = handler