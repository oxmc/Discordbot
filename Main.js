const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

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
