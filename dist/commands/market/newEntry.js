"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = {
    name: 'new-entry',
    description: 'Add a new entry to the market',
    options: [
        {
            name: 'name',
            description: 'What is it that you are trying to sell?',
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'type',
            description: 'What is the type of your market entry?',
            type: discord_js_1.ApplicationCommandOptionType.String,
            choices: [
                {
                    name: 'Card',
                    value: 'Card',
                },
                {
                    name: 'Frame',
                    value: 'Frame',
                },
                {
                    name: 'Dye',
                    value: 'Dye',
                },
                {
                    name: 'Bits',
                    value: 'Bits',
                },
            ],
            required: true,
        },
        {
            name: 'code',
            description: 'If your entry has a code, please provide it',
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'price',
            description: 'What do you want in return?',
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true,
        },
    ],
};
async function run({ interaction, client, handler }) {
    if (!interaction.isChatInputCommand())
        return;
    if (interaction.commandName === 'new-entry') {
        const name = interaction.options.get('name');
        const type = interaction.options.get('type');
        const cardCode = interaction.options.get('code');
        const price = interaction.options.get('price');
        const embedColor = type?.value === 'Card'
            ? '#6366f1'
            : type?.value === 'frame'
                ? '#0ea5e9'
                : type?.value === 'Dye'
                    ? 'Random'
                    : '#34d399';
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle(name?.value)
            .setDescription(`Entry Type: ${type?.value}`)
            .setColor(embedColor)
            .addFields({ name: 'Field Title', value: 'test', inline: true });
        interaction.reply({ embeds: [embed] });
    }
}
exports.run = run;
exports.options = {
    devOnly: false,
    guildOnly: true,
    userPermissions: ['Administrator', 'AddReactions'],
    botPermissions: ['Administrator', 'AddReactions'],
    deleted: false,
};
