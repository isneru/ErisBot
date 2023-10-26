"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../utils/index.js");
exports.default = (0, index_js_1.event)(index_js_1.Events.ClientReady, ({ log }, client) => {
    const { user } = client;
    return log(`Mad Sword King ${client.user.username} is ready for battle.`);
});
