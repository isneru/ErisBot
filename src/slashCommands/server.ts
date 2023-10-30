import { CommandInteraction, Client, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('server')
  .setDescription('Provides information about the server.');

async function server(client: Client, interaction: CommandInteraction) {
  await interaction.reply(
    `This server is ${interaction?.guild?.name} and has ${interaction?.guild?.memberCount} members..`
  );
}

export default server;
