module.exports = {
    id: 'enleveevent',
    description: 'enleve le role event',
    execute(button) {
        button.member.roles.remove(button.guild.roles.cache.find(r => r.name === 'Event')) 
        button.reply({content: 'Tu as bien enlevé ton rôle !',ephemeral: true})

        console.log(`Le role Event à été enlevé de ${button.user.username}`)
    }
}