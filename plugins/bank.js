let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let name = await conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
let pp = 'https://telegra.ph/file/c7cd3c7bd4e1a30167f14.jpg'
  const caption = `
${htki} Bank ${htka}

• *Name:* ${name}
• *Bank:* ${user.atm}
• *Money*: ${user.money}
• *Balance*: ${user.balance}

`.trim()
  conn.sendFile(m.chat, pp, 'bank.jpg', `${caption}`, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false

module.exports = handler