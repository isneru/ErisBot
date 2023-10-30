"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client, GatewayIntentBits } = require('discord.js');
const { CommandKit } = require('commandkit');
require("dotenv/config");
const path = require('path');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
new CommandKit({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    // validationsPath: path.join(__dirname, 'validations'),
    devGuildIds: ['1145481891357675582', '589313803749949440'],
    devUserIds: ['198873253626904577', '387337136732635137'],
    // devRoleIds: ['DEV_ROLE_ID_1', 'DEV_ROLE_ID_2'],
    skipBuiltInValidations: true,
    bulkRegister: true,
});
client.login(process.env.CLIENT_TOKEN);
