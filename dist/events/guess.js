"use strict";
const words = ['Pear', 'Cat', 'Mug', 'Sunset', 'Starlight'];
module.exports = {
    data: { name: 'guess', description: 'guess the word' },
    run: async ({ interaction }) => {
        const answer = words[Math.floor(Math.random() * words.length)];
        await interaction.reply('Game started! Guess a sword from the following list:\n\n' + "words.join('\n')");
    },
};
