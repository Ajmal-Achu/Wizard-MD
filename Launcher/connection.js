const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//Database


//Heroku

global.herokuapi = process.env.HEROKU_API_KEY
global.herokuapp = process.env.HEROKU_APP_NAME

//settings

let fake = process.env.OWNER_NUMBER
global.owner = ['642727777777',`${fake}`]
global.wame = "https://youtube.com/channel/UCZnoFxt8LQ9pNeOD3TMcV4A"
global.pemilik = ['642727777777']
global.premium = ['642727777777']
global.pengguna = process.env.USER_NAME
global.footer = process.env.WATERMARK
global.watermark = process.env.WATERMARK
global.logo = process.env.LOGO
global.botname = process.env.BOT_NAME
global.caption = process.env.CAPTION
global.ownername = process.env.OWNER_NAME
global.tutorial = "https://youtube.com/channel/UCZnoFxt8LQ9pNeOD3TMcV4A"
global.youtube = "github.com/Ajmal-Achu"
global.packname = process.env.STICKER_PACK_NAME
global.logo = process.env.LOGO
global.author = process.env.STICKER_AUTHOR_NAME
global.sessionName = 'session' //session name
global.prefa = ['#'] //prefix
global.sp = '🔵' //sp
global.dripstyping = false
global.dripsreadgroup = false
global.dripsreadall = false
global.dripsrecord = false
global.available = false
global.unavailable = true
global.limittot = 100,
global.reactmoji = process.env.REACT_EMOJI
global.imgjoinrpg = fs.readFileSync('./Library/image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Library/image/mining.jpg')
global.imgdevil = fs.readFileSync('./Library/image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Library/image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Library/image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Library/image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Library/image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Library/image/img/behemoth.jpg')
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mess = {
    success: 'All set sucessfully changed settings!',
    public: 'Wizard MD is now working in public mode',
    self: 'Wizard MD is now working in private mode',
    admin: '*This feature is only for admin!*',
    botAdmin: '*wizard bot must be admin first!*',
    owner: '*this feature is only for owner*',
    group: '*Feature is only for groups!*',
    grouponly: '*Group Mode Only*',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: '*please wait it is being processed....⚙️*',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
    noPetualang: '*you are not in rpg database type #joinrpg* _ur name_'
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.visoka = { url: 'https://i.imgur.com/LbmTdhf.mp4' }
global.vid = { url: 'https://i.imgur.com/LbmTdhf.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
