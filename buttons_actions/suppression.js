const { MessageEmbed } = require('discord.js');

module.exports = {
  id: 'suppression',
  description: 'ferme le salon pour le créateur du salon',
  execute(button) {
    if (!button.member.roles.cache.some(role => role.name === 'Staff' )){
      return button.reply({content: "Tu n'as pas la permission staff pour executer cette commande",ephemeral: true});
    }
    const embed = new MessageEmbed()
      .setTitle("Ce ticket va etre supprimer !")
      .setDescription(`Suppression automatique dans 5 secondes !`)
      .setColor("RED")
    button.channel.send({ embeds: [embed]})
    setTimeout(() => button.channel.delete(), 10000)
    button.reply({content: 'Suppression en cours',ephemeral: true})

    }
}