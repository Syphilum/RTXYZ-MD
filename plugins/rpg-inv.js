let handler = async (m, { conn, args }) => {
  let target = m.mentionedJid[0] || m.sender 
  let user = global.db.data.users[target]
  
  let armor = user.armor
  let sword = user.sword
  let fishingrod = user.fishingrod
  let pickaxe = user.pickaxe
  let katana = user.katana
  let bow = user.bow
  let axe = user.axe

  let capt = `
🎒 *INVENTORY - ${user.name.toUpperCase()}* 🎒

👤 *Username* : ${user.name}
🏷️ *Role* : ${user.role}
⭐ *Level* : ${user.level}
📈 *Exp* : ${user.exp}
🔖 *Limit* : ${user.limit}
💰 *Money* : ${user.money}
🎖️ *Title* : ${user.titlein}
🌀 *Skill* : ${user.skill ? user.skill : 'Tidak Ada'}

╭━━━⌈ 🛡️ *STATUS* ⌋━━━
├ ❤️ *Health* : ${user.healt}
├ ⚡ *Energi* : ${user.energi}
├ 🏃 *Stamina* : ${user.stamina}
├ 🏃‍♂️ *Speed* : ${user.speed}
├ 💪 *Strength* : ${user.strenght}
├ 🗡️ *Attack* : ${user.attack}
└ 🛡️ *Defense* : ${user.defense}

╭━━━⌈ 🎒 *BACKPACK* ⌋━━━
├ 🧪 *Potion* : ${user.potion}
├ 💎 *Diamond* : ${user.diamond}
├ 🪙 *Emas* : ${user.emas}
├ ⛓️ *Iron* : ${user.iron}
├ 🔷 *Berlian* : ${user.berlian}
├ ✳️ *Emerald* : ${user.emerald}
├ 🪙 *Litecoin* : ${user.litecoin}
├ 🎟️ *Tiketcoin* : ${user.tiketcoin}
├ 🪨 *Batu* : ${user.batu}
├ 🪵 *Kayu* : ${user.kayu}
├ 🧵 *String* : ${user.string}
└ 🪹 *Coal* : ${user.coal}

╭━━━⌈ ⚔️ *SENJATA* ⌋━━━
├ 🛡️ *Armor* : ${getWeaponName(armor, 'Armor')}
├ 🗡️ *Sword* : ${getWeaponName(sword, 'Sword')}
├ 🎣 *FishingRod* : ${getWeaponName(fishingrod, 'FishingRod')}
├ ⛏️ *Pickaxe* : ${getWeaponName(pickaxe, 'Pickaxe')}
├ 🥷 *Katana* : ${getWeaponName(katana, 'Katana')}
├ 🪓 *Axe* : ${getWeaponName(axe, 'Axe')}
└ 🏹 *Bow* : ${getWeaponName(bow, 'Bow')}

╭━━━⌈ 🧱 *DURABILITY* ⌋━━━
├ 🛡️ *Armor* : ${user.armordurability}
├ 🗡️ *Sword* : ${user.sworddurability}
├ 🎣 *FishingRod* : ${user.fishingroddurability}
├ ⛏️ *Pickaxe* : ${user.pickaxedurability}
├ 🥷 *Katana* : ${user.katanadurability}
├ 🪓 *Axe* : ${user.axedurability}
└ 🏹 *Bow* : ${user.bowdurability}

╭━━━⌈ 🎁 *USER BOX* ⌋━━━
├ 📦 *Common* : ${user.common}
├ 🟢 *Uncommon* : ${user.uncommon}
├ 🔮 *Mythic* : ${user.mythic}
├ 🟡 *Legendary* : ${user.legendary}
└ 📦 *Total* : ${user.common + user.uncommon + user.mythic + user.legendary}

╭━━━⌈ 🐾 *USER PETS* ⌋━━━
├ 🎫 *Pet Token* : ${user.pet}
├ 🍖 *Makanan Pet* : ${user.makananpet}
├ 🐱 *Kucing* : Lv. ${user.kucing}
├ 🐶 *Anjing* : Lv. ${user.anjing}
├ 🦊 *Rubah* : Lv. ${user.rubah}
├ 🐺 *Serigala* : Lv. ${user.serigala}
└ 🔥 *Phonix* : Lv. ${user.phonix}
`

function getWeaponName(level, type) {
  const names = {
    0: 'Tidak Punya',
    1: `Wood ${type}`,
    2: `Iron ${type}`,
    3: `Gold ${type}`,
    4: `Diamond ${type}`,
    5: `Netherite ${type}`,
    6: `Crystal ${type}`,
    7: `Obsidian ${type}`,
    8: `Netherite ${type}`,
    9: `Wither ${type}`,
    10: `Dragon ${type}`,
    11: `Hacker ${type}`,
    12: `GOD ${type}`
  }
  return names[level] || 'Tidak Diketahui'
    }
  
conn.sendMessage(m.chat, {
text: capt,
contextInfo: {
externalAdReply: {
title: 'I N V E N T O R Y',
thumbnailUrl: 'https://telegra.ph/file/ea3ee889b63edfb616c2d.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })

conn.fakeReply(m.chat, capt, '0@s.whatsapp.net', 'Inventory', 'status@broadcast')
  conn.sendFile(m.chat, 'https://telegra.ph/file/5488aa5c5b3c28cd35e0e.jpg', 'balance.jpg', capt, m)
}

handler.help = ['inventory *@user*']
handler.tags = ['rpg']
handler.command = /^inv|inventory$/i

module.exports = handler
