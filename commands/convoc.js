const fs = require('fs');
const { MessageActionRow , MessageButton, MessageEmbed } = require('discord.js');
module.exports = {
	data: {
		name:"convoc",
		description:"convoc qqun dans un salon vocal privé",
		type:1,
		permissions:"Staff",
		options:[{
            name:"1",
            description:"la personne à convoquer",
            type:9,
          }]
	},
	async execute(interaction) {
		
		let category = interaction.guild.channels.cache.find(c => c.name == "📊 ~ Staff").id
		interaction.reply({ content: 'channel créé' })

		const channel = await interaction.guild.channels.create("convocation",{
			type:2,
			parent: category,
		});
		try{
		interaction.member.voice.setChannel(channel)
		interaction.options.getMentionable('1').voice.setChannel(channel)
		}catch (error) {
			if (error) console.error(error);}
	}
};