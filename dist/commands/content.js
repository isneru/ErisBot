"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
const commandkit_1 = require("commandkit");
exports.data = {
    name: 'content',
    type: commandkit_1.CommandType.Message,
};
function run({ interaction, client, handler }) {
    interaction.reply(`The message is: ${interaction.targetId}`);
}
exports.run = run;
exports.options = {
    devOnly: true,
    guildOnly: true,
    userPermissions: ['Administrator', 'AddReactions'],
    botPermissions: ['Administrator', 'AddReactions'],
    deleted: false,
};
