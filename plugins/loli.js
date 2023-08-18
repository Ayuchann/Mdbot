let handler = async (m, { conn, command }) => {
let thumb = `https://api.xyroinee.xyz/api/sfw/loli?apikey=${global.xyroinee}`
let text = `Awas FBI Cok`
    //conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
 //   conn.sendFile(m.chat, nyenye, 'kul.jpg', 'Tch', m) 
    conn.sendFile(m.chat, thumb, 'menu.jpg', `${text}`, m)
}
handler.help = ['loli']
handler.tags = ['nsfw']
handler.command = /^(loli)$/i
module.exports = handler