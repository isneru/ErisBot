"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSlashCommands = void 0;
const getAllFiles_1 = require("./getAllFiles");
const path = require("path");
const registerSlashCommands = (client) => {
    const commandsFolders = (0, getAllFiles_1.getAllFiles)(path.join(__dirname, '..', 'slashCommands'), true);
    for (const commandsFolder of commandsFolders) {
        const commandFiles = (0, getAllFiles_1.getAllFiles)(commandsFolder);
        console.log(commandFiles);
    }
};
exports.registerSlashCommands = registerSlashCommands;
