/*
  * Dann Official
  * Janngan dihapus, berterimakasihlah kepada pengembang
  * Instagram: @dannalwaysalone
*/

let handler = async (m, { conn }) => {
	global.wa = '0'
	let thumb = 'https://telegra.ph/file/16b154ad8a96d7ad246cb.jpg'
	let tqto = `${htki} Thanks To ${htka}

Terimakasih terutama kepada:
➸ @${global.owner[0]}

Terimakasih juga kepada:
➸ @${global.wa[0]}
─────────────────────
• Rizal FR
• My ortu
• DannTeam
• Nurutomo
• Adiwajshing
• Ariffb
• Amel
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• Mursid
• Jarot
• Tio
• Aca Mirabel
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────
`
await m.reply(tqto)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler