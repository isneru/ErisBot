"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_js_1 = require("./utils/index.js");
const index_js_2 = require("./events/index.js");
const keys_js_1 = require("./keys.js");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
(0, index_js_1.registerEvents)(client, index_js_2.default);
client.login(keys_js_1.default.clientToken).catch((err) => {
    console.log('[Login Error]', err);
    process.exit(1);
});
