
module.exports = {
    id: 'rolejoueur',
    description: 'Clique pour devenir joueur',
    execute(button) {
        if (button.member.roles.some(button.guild.roles.cache.find(r => r.name === 'Arrivant'))){
        button.member.roles.remove(button.guild.roles.cache.find(r => r.name === 'Arrivant'))
    };
    try{
        button.member.roles.add(button.guild.roles.cache.find(r => r.name === 'Joueurs')) 
        button.reply({content: 'Tu as bien reçu ton rôle !',ephemeral: true})
        console.log(`Le role joueur été donné à ${button.user.username}`)
    }catch(e){
        button.reply({content: 'Erreur ! contacte un administrateur !!',ephemeral: true})
        console.log(`${button.user.username} à un probleme pour avoir le role joueurs`);
    }
        
    }
}