let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

📮 S&K
1. Jangan diperjual belikan Script ini
2. Jangan salah gunakan script ini!
3. Jangan lupa Subscribe Youtube
4. Jangan di per jual belikan
• Jika ada eror di sc hub https://wa.me/6285380166282

--------Thanks to ✨---------
Allah SWT
My parents
All Friends
All Contributors
All Creator Bot
Adiwajshing
Nurutomo
Yt Maxxy Botz 
BochilGaming`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://www.youtube.com/@MaxxyBotz'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
