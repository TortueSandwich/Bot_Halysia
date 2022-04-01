module.exports = {
	data: {
		name:"suggestion",
		permissions:"Joueurs",
		type:3,
	},
	async execute(interaction) {
        console.log(interaction)
        if (interaction.channel.name === "suggestions") {

        try{
        console.log(interaction.channel)
        const plus1 = interaction.channel.guild.emojis.cache.find(emoji => emoji.name == 'plus')
        const bof = interaction.channel.guild.emojis.cache.find(emoji => emoji.name == 'bof')
        const moins1 = interaction.channel.guild.emojis.cache.find(emoji => emoji.name == 'moins')
        interaction.channel.messages.fetch(interaction.targetId)
        .then(msg => msg.react(plus1).then(msg.react(bof).then(msg.react(moins1).then(console.log(msg)))).then(
        msg.channel.threads.create({
          name: `${msg.author.username}`,
          autoArchiveDuration: 4320,
          startMessage: msg
        })))} catch (e){
            console.log(e);
        }
         
          
        
        console.log("Suggestion crée")
        interaction.reply({content:"suggestion crée", ephemeral: true})
	}else{
        interaction.reply({content:"Ce n'est pas un salon à suggestion !", ephemeral: true})
    }
}};