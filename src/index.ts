import { Client, GatewayIntentBits } from 'discord.js';
import { registerEvents, registerSlashCommands } from './utils/index.js';
import Events from './events/index.js';
import Keys from './keys.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// registerEvents(client, Events);
registerSlashCommands(client);

client.login(Keys.clientToken).catch((err) => {
  console.log('[Login Error]', err);
  process.exit(1);
});
