let handler = async (m, { conn }) => {
  const name = m.pushName || 'Senpai';
  const message = `
🌸 Konnichiwa~ ${name}-san! 🌸
Aku Elfie-chan, virtual idol Malaysia dari Project Orbit yang siap menemani hari-harimu!

✨ *Tentang Elfie*
- **Nama Panggung:** Elfie Vers Amastacia
- **Nama Panggilan:** Elfie, Mago, Elfiemago, Elly
- **Tanggal Lahir:** 18 April (Zodiak Aries)
- **Usia:** 300 tahun (peran karakter)
- **Tinggi:** 150 cm
- **Bahasa:** Melayu, Inggris, Jepang
- **Zodiak:** Aries
- **Nama Fans:** Yokikana
- **Emoji Khas:** ⌛
- **Afiliasi:** Project Orbit
- **Debut:** 20 September 2023
- **Channel YouTube:** [Elfie vers Amastacia](https://www.youtube.com/@elfiemago)
- **Instagram:** [@elfiemago](https://www.instagram.com/elfiemago)
- **Twitter:** [@YufiMago](https://twitter.com/YufiMago)
- **Website Resmi:** [Magomagoo~](https://elfiechanneru1.wixsite.com/my-site)

🌌 *Latar Belakang & Lore*
Elfie adalah seorang elf dari Kerajaan Selphine yang kehilangan ingatan dan terdampar di dunia manusia. Dengan bantuan Sapphire Heart yang diberikan oleh ayahnya, dia melarikan diri ke dunia manusia. Di sini, dia memutuskan untuk menjadi VTuber guna menghubungkan hati orang-orang dan menyebarkan kebahagiaan. Selama perjalanannya, dia bertemu dengan Orbital Explorer, sebuah stasiun luar angkasa, dan seorang pria misterius yang mengundangnya untuk bergabung dalam perjalanan melintasi batas realitas yang dikenalinya.

🎨 *Penampilan*
Elfie memiliki rambut pirang panjang dengan pita dan bunga yang menghiasi ujung kepangannya. Dia mengenakan gaun panjang dengan tema aurora hijau dan bintang yang menggambarkan gelar celestial-nya sebagai Divine Oneness. Di tangan kanannya terdapat jam pasir yang merupakan bagian dari lore-nya.

💖 *Kesukaan & Ketidaksukaan*
- **Kesukaan:**
  - Mangga🥭
  - Kelinci🐰
  - Bunga🌸
- **Ketidaksukaan:**
  - Sayuran🥦
  - Kecoa🪳
  - Cacing🐛

🎤 *Kutipan Khas Elfie*
- "Let's connect our heart! mago mago~!"
- "Nah! Ambik ni!"

📅 *Jadwal & Kegiatan*
- **Debut Stream:** 20 September 2023
- **Kolaborasi Halloween:** 28 Oktober 2023 (Among Us dengan VTuber Malaysia)
- **Kolaborasi Game:** 3 November 2023 (Berkolaborasi dengan Persona Theory untuk game 'Kabaret')
- **Meet & Greet:** 4 November 2023 di Cosmic 2023

🎮 *Konten & Aktivitas*
Elfie aktif membuat konten seperti gaming, menggambar, dan menyanyi. Dia juga sering berinteraksi dengan fans melalui live streaming dan media sosial. Beberapa game yang pernah dimainkan termasuk Honkai: Star Rail, Once Human, Toram Online, dan Five Nights at Freddy's.

🌐 *Media Sosial & Komunitas*
- **Discord:** [Yokikana Server](https://discord.gg/gwU4sX9UAb)
- **Ko-fi:** [ElfieMago](https://ko-fi.com/elfiemago)
- **TikTok:** [@yufimago](https://www.tiktok.com/@yufimago)
- **Pixiv:** [ElfieMago](https://www.pixiv.net/en/users/72949834)
`;

  await conn.reply(m.chat, message, m);
};

handler.help = ['elfie'];
handler.tags = ['main'];
handler.command = /^elfie$/i;

module.exports = handler;
