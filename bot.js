const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Dark Souls Remastered")

});



bot.on('message' , (message) =>{
   
    if(message.content == 'ping pong') {
            
         message.channel.send(':ping_pong:');
    }

});
bot.login(process.env.NDg4NzA3MTM1NjkwMjQ0MDk4.DngHrg.5TZinfEE_Wg7BhZtvqhT2b5pOQQ);
