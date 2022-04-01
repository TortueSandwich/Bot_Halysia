const { MessageEmbed , MessageActionRow , MessageButton} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: {
    name: "menu",
    description: "envois un menu",
    permissions:"Staff",
    type:1,
    options: [{
        name:"choix",
        description: "Envois le reglement",
        type:3,
        choices:[{
          name: "reglement",
          value: "reglement"
        },
        {
          name: "ticket",
          value: "tickets"
        },
        {
          name: "event",
          value: "events"
        }]
      }]
  },

  /*new SlashCommandBuilder()
	.setName('menu')
	.setDescription('Get info about a user or a server!')
	.addSubcommand(subcommand =>
		subcommand
			.setName('reglement')
            .setDescription('Règlement'))
	.addSubcommand(subcommand =>
		subcommand
			.setName('tickets')
            .setDescription('Tickets')),
	*/		
    async execute(interaction) {
      if (interaction.options.getString("choix") === 'reglement') {
			const embed = new MessageEmbed()
      .setTitle("Règlement")
      .setDescription(`» Soyez respectueux, le harcèlement et toutes sorte de discrimination sera sanctionné

        » Le spam et le flood sont interdit, merci aussi de ne pas abuser des modificateurs de voix par exemple
        
        » Merci d'éviter de dévoiler des informations personnelles d'autres personnes ou de vous-mêmes
        
        » La publicité pour et vers d'autres serveurs n'est pas autorisée. Les spams ou arnaques sont interdit même en message privé.
        `)
      .setColor("GREEN")
	  const row = new MessageActionRow()
      .addComponents(
		new MessageButton()
      .setCustomId("rolejoueur")
      .setLabel("🤝 Accepter") 
      .setStyle('PRIMARY')
      )
      .addComponents(
		new MessageButton()
      .setCustomId("refus")
      .setLabel("❌ Refuser") 
      .setStyle('PRIMARY')
      )
    interaction.channel.send({ embeds: [embed] /*, components: [row]*/ })
    interaction.reply({content: 'Menu crée !', ephemeral: true })

		}else if (interaction.options.getString("choix") === 'tickets') {
			const row = new MessageActionRow()
    .addComponents( 
      new MessageButton()
        .setCustomId('ticket')
        .setLabel("🐞 Bug")
        .setStyle('SECONDARY')
    )
    .addComponents( 
      new MessageButton()
        .setCustomId('signalement')
        .setLabel("💢 signalement")
        .setStyle('SECONDARY')
    )
    const embed = new MessageEmbed()
      .setTitle("Ouvre un ticket ! ")
      .setDescription(`Report nous le bug que tu as trouvé
      ou signale nous ton problème avec un joueur ! `)
      .setColor("ORANGE")
    interaction.channel.send({ embeds: [embed], components: [row] })
    interaction.reply({content: 'Menu crée !', ephemeral: true })
		}
    else if (interaction.options.getString("choix")=== 'events'){
      
      const embed = new MessageEmbed()
      .setTitle("Inscription à l'event")
      .setDescription(`Clique pour être notifié le jour de l'event !`)
      .setColor('#EA54F3')
      
      const row = new MessageActionRow()
      .addComponents( 
        new MessageButton()
          .setCustomId('event')
          .setLabel("✋ participer")
          .setStyle('PRIMARY'))
      .addComponents( 
        new MessageButton()
            .setCustomId('enleveevent')
            .setLabel("🏃‍♂️🏃‍♀️Ne plus participer")
            .setStyle('SECONDARY'))
        interaction.channel.send({ embeds: [embed], components: [row] })
        
        interaction.reply({content: 'Menu crée !', ephemeral: true })
          
      
    }
	}
    


};