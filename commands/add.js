const { MessageEmbed , MessageActionRow , MessageButton} = require('discord.js');
const { SlashCommandBuilder, userMention } = require('@discordjs/builders');

module.exports = {
	data: {
		name: "add",
		description: "ajoute ou enlève une personne du salon",
		permissions:"Staff",
		type: 1,
		options: [{
			name:"add",
			description:"ajoute qqun",
			type:1,
			options:[{
				name:"user",
				description:"l'utilisateur concerné",
				type:6,
				required:true,
			}]
		},
		{
			name:"remove",
			description:"enleve qqun",
			type:1,
			options:[{
				name:"user",
				description:"l'utilisateur concerné",
				type:6,
				required:true,
			}]
		}]

	},
	
	/*new SlashCommandBuilder()
	.setName('modif')
	.setDescription('lelelelelelele')
	.addSubcommand(subcommand =>
		subcommand
			.setName('ajouter')
            .setDescription('Ajouter qqun au salon')
            .addUserOption(option => option.setName('add').setDescription('Ajoute qqun')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('enlever')
            .setDescription('enleve qqun du salon')
            .addUserOption(option => option.setName('remove').setDescription('Enlève qqun'))),
			*/
    async execute(interaction) {
		const toadd = interaction.options.getUser('user');
		const toremove = interaction.options.getUser('user');
		/*if (!interaction.user.roles.cache.some(role => role.name === 'Staff' )){
			return interaction.channel.send("Tu n'as pas la permission staff pour executer cette commande");
		}*/


        if (interaction.options.getSubcommand() === 'add') {
			const { Permissions } = require('discord.js');
				interaction.channel.permissionOverwrites.create(toadd,{
							VIEW_CHANNEL:true
						},
					);
		

		} else if (interaction.options.getSubcommand() === 'remove') {
			const { Permissions } = require('discord.js');
				interaction.channel.permissionOverwrites.create(toremove,{
							VIEW_CHANNEL:false
						},
					);
        }
    }
};