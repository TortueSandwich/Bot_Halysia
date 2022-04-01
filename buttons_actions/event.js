module.exports = {
    id: 'event',
    description: 'Clique pour devenir joueur',
    execute(button) {
        button.member.roles.add(button.guild.roles.cache.find(r => r.name === 'Event')) 
        button.reply({content: 'Tu as bien reçu ton rôle !',ephemeral: true})

        console.log(`Le role Event été donné à ${button.user.username}`)
    }
}