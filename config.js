let fs = require('fs')

global.owner = ['6289605393009'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  vinco: 'https://viko-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'KingOfBear',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'KingOfBear',
  'https://apikey-bear2.herokuapp.com': 'KingOfBear',
  'https://apikey-bear3.herokuapp.com': 'KingOfBear',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'rey2k21'
zekskey = 'apivinz'
xteamkey = 'https://pastelink.net/v20Md'
leyskey = 'dappakntlll'
bearkey = 'https://pastelink.net/v20Md'
ApiiKey = 'https://pastelink.net/v20Md'
vinkey = 'vinko'

namabot = 'ππ’πππ π΅πππ'
namalu = 'HFZ'
footer = '\nΒ©King Of Bear'
kasihcaption = `Nih Sayang`

// Sticker WM
global.stiker_wait = '_*Tunggu Sebentar...*_'
global.packname = 'YukiBot Multi device'
global.author = 'HFZ'
global.email = 'drakipul1016@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = 'Β©King Of Bear Bot-Md'
global.media = 'https://telegra.ph/file/5d45a3d1e12726d98c5e4.jpg'

global.wait = '_*Tunggu Sebentar Sedang Di Proses...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      petFood: 'π',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
