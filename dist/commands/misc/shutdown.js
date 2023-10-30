"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = {
    name: 'shutdown',
    description: 'shutdown',
};
async function run({ interaction, client }) {
    await interaction.reply({ content: `I feel a bit sleepy ${interaction.user.displayName}.` });
    setTimeout(async () => {
        await interaction.editReply({
            content: ``,
            embeds: [new discord_js_1.EmbedBuilder().setColor('#dc2626').setDescription(`${client.user.username} has fallen asleep ...`)],
        });
        client.destroy();
        process.exit();
    }, 5000);
}
exports.run = run;
exports.options = {
    devOnly: true,
    guildOnly: true,
    userPermissions: ['Administrator', 'AddReactions'],
    botPermissions: ['Administrator', 'AddReactions'],
    deleted: false,
};
