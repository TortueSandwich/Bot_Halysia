module.exports = {
    id: 'refus',
    description: 'refus des regles',
    async execute(button) {
        if(!button.member.kickable) return button.reply({ content: 'Je ne peux pas te kick', ephemeral: true })
        try {
        //button.member.send("Tu as refusé les règles. Reviens quand tu auras changé d'avis : https://discord.gg/NMgVAWXHYY")
    
        await button.member.kick(["Tu as refusé les règles. Reviens quand tu auras changé d'avis : https://discord.gg/NMgVAWXHYY"])
    }catch{}
    }
  };