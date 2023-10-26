const words = ['Pear', 'Cat', 'Mug', 'Sunset', 'Starlight'];

module.exports = {
  data: { name: 'guess', description: 'guess the word' },

  run: async ({ interaction }: { interaction: import('discord.js').ChatInputCommandInteraction }) => {
    const answer = words[Math.floor(Math.random() * words.length)];

    await interaction.reply('Game started! Guess a sword from the following list:\n\n' + "words.join('\n')");
  },
};
