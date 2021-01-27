const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const MusicBot = require('discord-music-system');

const bot = new MusicBot({
    botPrefix: config.prefix,
    ytApiKey: config.ytapikey,
    botClient: client 
});

client.on('message', message => { // When the bot receive a message
    if(message.content.startsWith(bot.prefix)) { // If the message starts with your prefix
        bot.onMessage(message); // The music-system must read the message, to check if it is a music command and execute it.
    };
});

client.on('ready', () =>{
    client.user.setStatus('Online')
    console.log('Connected!')
})
//rest of your code

//always remember to never share your token with anyone
client.login(config.token)

function Restart() {
setTimeout(function(){ 
CrashToRestart
 }, 7200000);
}

Restart();
