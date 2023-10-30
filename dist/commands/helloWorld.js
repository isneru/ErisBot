"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: 'Hello World',
    description: 'Hello World!?',
};
function run({ interaction, client }) {
    interaction.reply(`Hello World`);
}
exports.run = run;
exports.options = {
    devOnly: false,
    guildOnly: true,
    userPermissions: ['Administrator', 'AddReactions'],
    botPermissions: ['Administrator', 'AddReactions'],
    deleted: false,
};
