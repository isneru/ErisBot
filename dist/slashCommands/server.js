"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = new discord_js_1.SlashCommandBuilder()
    .setName('server')
    .setDescription('Provides information about the server.');
async function server(client, interaction) {
    await interaction.reply(`This server is ${interaction?.guild?.name} and has ${interaction?.guild?.memberCount} members..`);
}
exports.server = server;