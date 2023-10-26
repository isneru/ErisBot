"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../utils/index.js");
const pingVariants = ['e!avatar', 'eavatar', 'ea'];
exports.default = (0, index_js_1.event)(index_js_1.Events.MessageCreate, ({ log }, client) => {
    if (pingVariants.includes(client.content)) {
        return client.reply(`${client.author.displayAvatarURL()}`);
    }
});
