const Discord = require('discord.js');
const config = require('./config.json');
const Client = new Discord.Client({disableEveryone: true});

Client.login(config.token);