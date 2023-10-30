import { CommandInteraction, Client, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('server')
  .setDescription('Provides information about the server.');

async function hello(client: Client) {
  console.log(`Hello ${client.user?.tag} is online`);
}

export default hello;
