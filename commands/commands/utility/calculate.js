const Discord = require('discord.js')
const math = require('mathjs');

module.exports = {
    commands: ['cal', 'calc', 'calculate'],
    callback: async (message, args) => {
        if (!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0x808080)
            .setTitle('Calculator')
            .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
            .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")

        message.channel.send(embed);
    },
}