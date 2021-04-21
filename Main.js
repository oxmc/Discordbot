//Require modules
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//Variables
const bot = {
    botPrefix: config.prefix,
    botToken: config.token,
    botVersion: config.version,
    botClient: client
};

//Functions
function Restart() {
setTimeout(function(){
CrashToRestart
 }, 7200000);
}

//Embeds
const HelpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('help')
	.setAuthor('oxmc', '', '')
	.setDescription('Here are all the things that you can do with this bot!')
	.addFields(
		{ name: 'commands', value: '' },
		{ name: '\u200B', value: '\u200B' },
		{ name: bot.prefix + 'help', value: 'Shows this help embed', inline: true },
		{ name: bot.prefix + 'version', value: '', inline: true },
	)
	.setImage('http://assets.uwubot.org/images/servericon.png')
	.setFooter('Thanks for using this bot!', '');

const VersionEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('version')
	.setAuthor('oxmc', '', '')
	.setDescription('This bot is version ' + bot.version)
	.setImage('http://assets.uwubot.org/images/servericon.png')
	.setFooter('Thanks for using this bot!', '');

client.on('ready', () =>{
    client.user.setStatus('Online')
    console.log('Connected!')
})
//rest of your code

client.on('message', message => { // When the bot receives a message
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice(bot.prefix.length).split(' ')[0];

  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);

  //If the user that types a message is a bot account return.
  if (message.author.bot) return;
  
  //If the message does not start with your prefix return.
  if (!message.content.startsWith(bot.prefix)) return;
 
  if (command === 'help') {
      channel.send(HelpEmbed);
  }
  if (command === 'version') {
      channel.send(VersionEmbed);
  }
});

//always remember to never share your token with anyone
client.login(bot.token)

Restart();
