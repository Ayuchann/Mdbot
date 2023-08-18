let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  

  let isImage = m.mtype
  if (chat.antiImage && isImage) {
    if(isImage === "imageMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('Foto terdeteksi!\nMaaf saya hapus Fotonya .')
         this.sendMessage(m.chat, { delete: m.key })
          //this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }return true
      }
    }
  }
  return true
}

module.exports = handler