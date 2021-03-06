module.exports = {
    commands: ['kick'],
    callback: async (message) => {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            const userKick = message.mentions.users.first();

            if (userKick) {
                var member = message.guild.member(userKick);

                if (member) {
                    member.kick('You have been kicked for breaking the rules.').then(() => {
                        message.reply(`Kicked user ${userKick.tag}!`)
                    }).catch(err => {
                        message.reply('Unable to kick user.')
                        console.log(err);
                    })
                } else {
                    message.reply('User not found.')
                }
            } else {
                message.reply('State the person you want to kick.')
            }
        } else {
            message.reply('You do not have permissions for that command.')
            return;
        }
    },
}