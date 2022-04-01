const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
	data:{
    name:"clear",
    description:"efface un certain nombre de message",
    permissions:"Staff",
    type:1,
    options:[{
      name:"nb",
      description:"nombre de message",
      type:4,
      min_value:1,
      max_value:99,
      required: true,
    }]
  },
  
  /* new SlashCommandBuilder()
		.setName('clear')
		.setDescription('suprrime des messages')
        .addIntegerOption(option => option.setName('nb').setDescription('nombre de messages').setRequired(true)),
  */
  
        async execute(interaction) {
    const nb = interaction.options.getInteger('nb');
    /*let exempleEmbed = new MessageEmbed()
	  .setColor(0x0099ff)
	  .setTitle('Messages suprimé')
      .setDescription(`${nb} messages ont bien été suprimé`)
      .setAuthor(`${interaction.user.username}`,`${interaction.user.displayAvatarURL({ format: 'png' })}`)*/

    /*if (!interaction.member.permissions.has('MANAGE_MESSAGES')){
      return interaction.channel.send("Tu n'as pas la permission de gérer les messages !");
    }*/

            
    interaction.channel.bulkDelete(nb,true)
    interaction.reply({content: `${nb} messages ont bien été supprimé ! (le bot ne peux pas supprimer des messages de plus de 14 jours)`, ephemeral: true })
    console.log(`Commande clear reconnue, ${nb} clear`)
  }

};