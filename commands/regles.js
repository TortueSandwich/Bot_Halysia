module.exports = {
	data: {
		name:"regles",
		permissions:"Staff",
		type:3,
	},
	async execute(interaction) {
        interaction.channel.messages.fetch(interaction.targetId).then(message => message.reply("fait gaffe tu ne respecte pas le règlement ! Va voir le #règlement et corrige ton message"))
        interaction.reply({content:"rappel aux règles", ephemeral: true})
	}
};