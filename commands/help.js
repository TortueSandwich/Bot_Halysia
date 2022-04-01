const {MessageEmbed, Interaction} = require('discord.js')
const { token , prefixe , botinfo , status} = require('../config.json');
const fs = require('fs');
module.exports = {
	data: {
		name:"help",
		description:"affiche les commandes et ce qu'elles font",
		type:1,
		permissions:"Joueurs",
	},
  async execute(interaction) {

	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	
	var joueur = "" 
	var staff = ""

	for (const file of commandFiles) {
		const command = require(`../commands/${file}`);
		if (!command.data.type == 3){
			if (command.data.permissions == "Joueurs"){
				joueur +="/" + command.data.name +" : "+ command.data.description + "\n"
			}
			if (command.data.permissions == "Staff"){
				staff +="/" + command.data.name +" : "+ command.data.description + "\n"
			}
		}
	}
	
    const embed = new MessageEmbed()
	.setColor("BLUE")
	.setTitle(`Prefixe: ${prefixe}`)
	.setDescription(`${joueur}`)
	
	
    const embed1 = new MessageEmbed()
	.setColor("BLUE")
	.setTitle("Liste des commandes")
	.addFields(
		{name:"commandes Staff :",value:`${staff} oui`},
		{name: "Le drive :",value:"[Le drive de Halysia ici](https://drive.google.com/drive/folders/1RRknPl74A4LR9aSzNI2srpkz2qn8c6Y5)", inline: true },
       )
  interaction.reply({embeds:[embed],ephemeral:true});
  if (interaction.member.roles.cache.some(role => role.name === 'Staff' )){
	return interaction.user.send({embeds:[embed1]})
}
  
  }
};
