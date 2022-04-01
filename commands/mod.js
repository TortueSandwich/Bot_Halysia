const { MessageEmbed } = require('discord.js');
module.exports = {
	data: {
		name:"mod",
		description:"affiche les mods autorisé",
    permissions:"Joueurs",
		type:1,
	},
	async execute(interaction) {
		const embed = new MessageEmbed()
        .setColor("NOT_QUITE_BLACK")
        .setTitle("Récapitulatif des mods autorisés sur Halysia")
        .setDescription(`
  [Optifine](https://optifine.net/downloads) permet à Minecraft de fonctionner plus rapidement et d'avoir une meilleure apparence avec une prise en charge complète des textures et de nombreuses options de configuration.

  [Sodium](https://www.curseforge.com/minecraft/mc-mods/sodium) permet aussi de faire fonctionner minecraft plus rapidement, encore plus que ce que permet Optifine mais sans quelque fonctionnalité  qui peuvent etre remplacer par d'autres mod.
  
  [Iris Shders](https://irisshaders.net/) ajoute la possibilité d'ajouter des shaders, compatible avec sodium.

  [Replay Mod](https://www.replaymod.com/) est utile pour enregistrer et revoir sa survie en sortant de sa tête. 

  [Litematica](https://www.curseforge.com/minecraft/mc-mods/litematica) vous permet d'utiliser des "plan" crée ailleurs que sur Halysia pour vos constructions.

  [Bobby](https://modrinth.com/mod/bobby) est un mod client permettant au joueur d'avoir une plus grande portée de vue que celle paramétrée dans le serveur.
  
  [Light overlay](https://www.curseforge.com/minecraft/mc-mods/light-overlay) est un mod permettant de marquer les blocs sur lesquels les monstres peuvent apparaitre.
  
  [Ok Zoomer](https://modrinth.com/mod/ok-zoomer) ajoute une fonction de zoom simialire à celle d'Optifine mais avec quelques options en plus (pas de mode cinématique obligatoire, nioveau de zoom ajustable..)
  
  [Fabricshot](https://www.curseforge.com/minecraft/mc-mods/fabrishot) permet de prendre des screen de la resolution qu'on veut
  
  [Lambdabettergrass](https://modrinth.com/mod/lambdabettergrass) ajoute des textures connectés pour l'herbe, le mycélium, la neige et l'herbe du nether avec des noms chelous.
  
  [Lambdynamiclights](https://modrinth.com/mod/lambdynamiclights) ajoute de la lumière dynamique semblable à ce que l'ont peut trouver sur Optifine mais pour fabric.
    
  [Shulkerboxtooltip](https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip) vous permet de voir une fenêtre d'aperçu du contenu d'une boîte de Shulker lorsque vous la survolez dans un inventaire en appuyant sur la touche Maj.
  
  [MiniHUD-fabric](https://www.curseforge.com/minecraft/mc-mods/minihud) permet d'afficher à l'écran différentes "lignes d'infos" (un "mini-F3").
  
  `)

    interaction.user.send({embeds:[embed]})
  interaction.reply({content:`Je vous ai envoyé la liste des mods en message privé !`})
	}
};