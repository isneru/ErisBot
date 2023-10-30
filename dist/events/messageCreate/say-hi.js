"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(message, client, handler) {
    if (message.content === 'hey') {
        message.reply('Hi!');
    }
}
exports.default = default_1;
