global.owner = ['6283135781093']  
global.mods = ['6283135781093'] 
global.prems = ['6283135781093']
global.nameowner = 'Neos'
global.numberowner = '6283135781093' 
global.mail = 'neosmaxima@gmail.com' 
global.gc = 'https://chat.whatsapp.com/GnTvsWtuWCF3pDpAjAfV6M'
global.instagram = 'https://instagram.com/syphilum1'
global.wm = '© Elfaria'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Elfaria Bot'
global.maxwarn = '3' // Peringatan maksimum Warn

global.autobio = true // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: true)
global.spam = true // Set true/false untuk anti spam (default: true)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    


//INI WAJIB DI ISI!//
global.btc = 'tj8CuJ2o' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
