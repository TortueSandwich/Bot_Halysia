module.exports = {
	data: {
		name: 'ping',
		type: 1,
		permissions:"Joueurs",
		description: "repond pong",
		
	},

	async execute(interaction) {
		interaction.reply({ content: 'Pong'})
	}
}
/*
const { SlashCommandBuilder } = require('@discordjs/builders');

const fs = require('fs');
const { MessageActionRow , MessageButton, MessageEmbed } = require('discord.js');
module.exports = {
	data: {
		name:"",
		description:"",
		permissions:"",
		type: ,
	},
	async execute(interaction) {
		interaction.reply({ content: '' })
	}
};




*/