global.owner = ['6283135781093']  
global.mods = ['62895331520602'] 
global.prems = ['62895331520602']
global.nameowner = 'Neos'
global.numberowner = '6283135781093' 
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com/CP5mV2D9IO730HpBgmkuyi'
global.instagram = 'https://instagram.com/prm2.0'
global.wm = '© Tio'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '3' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = true // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: true)
global.spam = true // Set true/false untuk anti spam (default: true)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    


//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
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
