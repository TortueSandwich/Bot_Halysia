const fs = require('fs')
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
  id: 'transcript',
  description: 'transforme le channel en fichier html',
  async execute(button){
    if (!button.member.roles.cache.some(role => role.name === 'Staff' )){
      return button.reply({content: "Tu n'as pas la permission staff pour executer cette commande",ephemeral: true});
    }
    const messages = await button.channel.messages.fetch()
    fs.writeFileSync(`./tickets_archive/${button.channel.name}.html`, `${messages.map(message => `${message.author.username}: ${message.content}`).join('<br>')}`)  
    const embed = new MessageEmbed()
      .setTitle("Ticket transcrit !")
      .setDescription(`Le ticket est archivé !`)
      .setColor("ORANGE")
    button.channel.send({ embeds: [embed],files:[`./tickets_archive/${button.channel.name}.html`]})
    const salon = button.guild.channels.cache.find(channel => channel.name == 'archives-bug')
    salon.send({content:`${button.channel.name} :`, files:[`./tickets_archive/${button.channel.name}.html`]})
    button.reply({content: 'Archivé !',ephemeral: true})
  }
}