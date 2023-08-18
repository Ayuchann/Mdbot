let handler = async (m, { conn, text, usedPrefix, command }) => {

var reel = `Berikut Adalah List Nokos* ⤵️

Admin Menyediakan:
- Panel
- Nokos All Apk
- Nokos Luar
- Jasa Run
- Jual Sc Bot RPG

• List Nokos: 
Telegram Indo
➡️ Rp 5.000
WhatsApp Indo
➡️ Rp 10.000

Untuk List Negara Lain/Apk Lain
Silahkan Chat ⤵️
https://wa.me/+62819-5293-0538
Selain itu *Clone* !!

• Payment:
➡️ Qris All Payment Only


• *Keuntungan*:
- Antibanned
- Cocok Buat Bot
- Cocok buat jb
`
conn.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: reel,
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {})
}

handler.help = ['nokos']
handler.tags = ['main']
handler.command = /^(nokos)$/i

module.exports = handler