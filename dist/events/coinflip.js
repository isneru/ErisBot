"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../utils/index.js");
const pingVariants = ['e!coinflip', 'ecoinflip', 'ecf'];
function generateCoin() {
    let coin = Math.floor(Math.random() * 2);
    return coin;
}
exports.default = (0, index_js_1.event)(index_js_1.Events.MessageCreate, ({ log }, msg) => {
    if (pingVariants.includes(msg.content)) {
        return msg.reply(generateCoin() === 0 ? 'Crown' : 'Tails');
    }
});
