const { MessageEmbed, Interaction } = require('discord.js');

module.exports = {
  id: 'fermeture',
  description: 'ferme le salon pour le créateur du salon',
  execute(interaction) {
    const { Permissions } = require('discord.js');
    interaction.channel.permissionOverwrites.set([
      {
      id: interaction.guild.roles.cache.find(r => r.name === "Staff"),
      allow: [Permissions.FLAGS.VIEW_CHANNEL],
      },
      {
      id: interaction.guild.id,
      deny: [Permissions.FLAGS.VIEW_CHANNEL],
      },
      {
      id: interaction.guild.roles.cache.find(r => r.name === "Joueurs"),
      deny: [Permissions.FLAGS.VIEW_CHANNEL],
      },
    ]); 
    const embed = new MessageEmbed()
      .setTitle("Ticket fermé !")
      .setDescription(`Le créateur du ticket ne peut voir le ticket !`)
      .setColor("ORANGE")
    interaction.channel.send({ embeds: [embed]})
    interaction.reply({content: 'Salon fermé !!',ephemeral: true})
  }
}