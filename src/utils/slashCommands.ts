import { Client } from 'discord.js';
import { getAllFiles } from './getAllFiles';
import path = require('path');

export const registerSlashCommands = (client: Client) => {
  const commandsFolders = getAllFiles(path.join(__dirname, '..', 'slashCommands'), true);

  for (const commandsFolder of commandsFolders) {
    const commandFiles = getAllFiles(commandsFolder);

    const commandName = commandsFolder.replace(/\\/g, '/').split('/').pop() as string;

    client.on(commandName, async (arg) => {
      for (const commandFile of commandFiles) {
        const commandFunction = require(commandFile);

        await commandFunction(client, arg);
      }
    });
  }
};
