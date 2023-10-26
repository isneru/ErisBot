"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../utils/index.js");
const pingVariants = ['e!ping', 'ep', 'e!p'];
exports.default = (0, index_js_1.event)(index_js_1.Events.MessageCreate, ({ log }, msg) => {
    if (pingVariants.includes(msg.content)) {
        return msg.reply('pong');
    }
});
