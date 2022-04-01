
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: {
		name: "info",
		description: "donne des informations",
		permissions:"Joueurs",
		type:1,
		options: [
			{
				name: "user",
				description: "donne des infos sur un utilisateur",
				type:1,
				options: [{
					name: "target",
					description: "l'utilisateur concerné",
					type: 6,
					
				}]},
			{
				name: "server",
				description: "donne des infos sur le serveur",
				type:1,
			}],
	},		
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');

			if (user) {
				await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
			} else {
				await interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
			}
		} else if (interaction.options.getSubcommand() === 'server') {
			await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
		}
	}
    


};