module.exports = {
	data: {
		name:"say",
		description:"Fait dire au bot ce que tu vas écrire",
		permissions:"Joueurs",
		type: 1,
        options:[{
            name:"message",
            description:"Le message",
            type:3,
            required: true,
          }]
	},
	async execute(interaction) {
        interaction.reply({ content: "c'est dis !", ephemeral: true})
		interaction.channel.send({ content: `${interaction.options.getString('message')}` })
	}
};
