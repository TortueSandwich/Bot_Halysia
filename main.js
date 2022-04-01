/*const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');
const { Client, Collection, Intents, Interaction } = require('discord.js');
require("dotenv").config();
const client = new Client({intents: (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5) | (1 << 6) | (1 << 7) | (1 << 8) | (1 << 9) | (1 << 10),  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],  })


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '902281237081772063';
const guildId = '899235720974192640';

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

client.login(process.env.BOT_TOKEN);


*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const fs = require('fs');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
// Require the necessary discord.js classes
const {Client,Intents,Collection, User} = require('discord.js');
require("dotenv").config();
// Create a new client instance
const client = new Client({intents: (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5) | (1 << 6) | (1 << 7) | (1 << 8) | (1 << 9) | (1 << 10),  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],  })


// Loading commands from the commands folder
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const buttonFiles = fs.readdirSync('./button_actions').filter(file => file.endsWith('.js'));

// Loading the token from .env file
const dotenv = require('dotenv');
const { permissions } = require('./commands/help');
const envFILE = dotenv.config();
const TOKEN = process.env['TOKEN'];


// Edit your TEST_GUILD_ID here in the env file for development
const TEST_GUILD_ID = "899235720974192640"


// Creating a collection for commands in client
client.commands = new Collection();
client.buttons = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data/*.toJSON()*/);
	client.commands.set(command.data.name, command);
	console.log(command.data.name);
}

for (const file of buttonFiles) {
	const boutton = require(`./button_actions/${file}`);
	client.buttons.set(boutton.id, boutton);
	console.log(boutton.id)
  }



/*commands.forEach(slashCommand => {
        console.log(`Changing command ${slashCommand.id}`);
            client.commands.permissions.add({
            command: slashCommand.id,
            permissions: [permissions2]
        });
    });*/



client.once('ready', () => {
	console.log('Ready!');

	const CLIENT_ID = client.user.id;
	const rest = new REST({version: '9'}).setToken(process.env.BOT_TOKEN);
	(async () => {
		try {
			if (!TEST_GUILD_ID) {
				console.log("prout");
				await rest.put(
				
					Routes.applicationCommands(CLIENT_ID), {
						body: commands
					},
				);
				console.log('Successfully registered application commands globally');
			} else { 
				await rest.put(
					Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
						body: commands
					},
				);
				console.log('Successfully registered application commands for development guild');
			}
		} catch (error) {
			if (error) console.error(error);
		}
	})();
});

client.on('interactionCreate', async interaction => {
	if (interaction.isButton()){
    try {
    client.buttons.get(interaction.customId).execute(interaction);
    } catch (error) {
    console.error(error)
    interaction.channel.send({content:"Button erreur" ,ephemeral: true});
    }return}

	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	//console.log(interaction.member.roles);
	if (command.data.permissions === "Staff") {
		if (!interaction.member.roles.cache.some(role => role.name === 'Staff' )){
			return interaction.reply({content:"Tu n'as pas la permission staff pour executer cette commande" , ephemeral: true });
		  }
	}
	
	/*(!interaction.members.roles.cache.some(r => command.roles.includes(r)) {
        return interaction.reply('pas droit mdr')*/ 
	
	try {
		await command.execute(interaction);
	} catch (error) {
		if (error) console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

const voiceCollection = new Collection();
client.on('voiceStateUpdate', async (oldState, newState) =>{
    const userM = await client.users.fetch(newState.id);
	const mec = newState.member
    
	if(!oldState.channel && newState.channel.id === '912046571040952321'){
		const channel = await newState.guild.channels.create(userM.tag,{
			type:2,
			parent: newState.channel.parent,
		});
		mec.voice.setChannel(channel)
		voiceCollection.set(userM.id, channel.id);
	} else if(!newState.channel){
		console.log("oui");
		console.log(oldState)
		if(oldState.channelId === voiceCollection.get(newState.id)){
			console.log("ca marche");
			oldState.channel.delete()
		}
	}
});

client.on('messageCreate', message => {
if (message.channel.name == 'suggestions') {
    if (message.author.bot) return; 
    const canstart = [`!`,`%`,`#`]
    if (!canstart.find(_canstartItem => message.content.toLowerCase().startsWith(_canstartItem))){
        const plus1 = message.guild.emojis.cache.find(emoji => emoji.name == 'plus')
        const moins = message.guild.emojis.cache.find(emoji => emoji.name == 'moins')
        const suisse = message.guild.emojis.cache.find(emoji => emoji.name == 'bof')
        try{

        message.react(plus1).then(message.react(suisse)).then(message.react(moins))
        message.channel.threads.create({
          name: `${message.author.username}`,
          autoArchiveDuration: 4320,
          startMessage: message
          
        })} catch (error) {
          console.error();
        }
        console.log("Suggestion crée")
      } 
    }})
// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);
