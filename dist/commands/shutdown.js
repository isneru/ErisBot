"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: 'shutdown',
    description: 'shutdown',
};
function run({ interaction, client }) {
    interaction.reply(`I feel tired ${client.user.displayName}, I will rest for a bit...`);
    client.destroy();
}
exports.run = run;
exports.options = {
    devOnly: true,
    guildOnly: true,
    userPermissions: ['Administrator', 'AddReactions'],
    botPermissions: ['Administrator', 'AddReactions'],
    deleted: false,
};
