module.exports = {
	data: {
		name:"setname",
		description:"modifier un nom",
		permissions:"Joueur",
		type: 1,
        options: [
			{
				name: "user",
				description: "donne des infos sur un utilisateur",
				type:1,
				options: [{
					name: "utilisateur",
					description: "Nouveau nom",
					type: 9,
                },{ 
                name: "nouveau-nom",
                description: "Nouveau nom",
                type: 3, 
				}]},
			{
				name: "channel",
				description: "donne des infos sur le serveur",
				type:1,
                options: [{
					name: "nouveau_nom",
					description: "Nouveau nom",
					type: 3,
					
				}]
			}],
	},
	async execute(interaction) {
		//
        //message.guild.channels.find("name", "general").setName("Testing")
        //message.member.setNickname()
        if (interaction.options.getSubcommand() === 'user') {
            interaction.options.getMentionable('utilisateur').setNickname(interaction.options.getString("nouveau-nom"))
            interaction.reply({ content: `Le nom de ${interaction.options.getMentionable('utilisateur')} à bien été changé `})
			//en ${interaction.options.getString('nouveau_nom')}
        }
        if (interaction.options.getSubcommand() === 'channel') {
            interaction.channel.setName(interaction.options.getString('nouveau_nom'));
            interaction.reply({ content: `Le nom du salon à bien été changé en ${interaction.options.getString('nouveau_nom')}`})
        }
}};