const { color } = require('../lib/color')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
module.exports = {
	before(m) {
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

		if (before !== user.level) {
			let chating = `*Congratulations*, you have leveled up!
*[ ${before} ]* ➠ *[ ${user.level} ]*
Use *.profile* to check`.trim()
			let thumb = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
    conn.sendMessage(m.chat, {
text: chating,
contextInfo: {
externalAdReply: {
title: namebot,
body: wm,
thumbnailUrl: thumb,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}})
			console.log(color(chating, 'yellow'))
		}
	}
}