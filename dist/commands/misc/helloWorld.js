"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: 'helloworld',
    description: 'Hello World!',
};
function run({ interaction, client }) {
    interaction.reply(`hello World`);
}
exports.run = run;
exports.options = {
    devOnly: false,
    guildOnly: true,
    userPermissions: ['Administrator', 'AddReactions'],
    botPermissions: ['Administrator', 'AddReactions'],
    deleted: false,
};
