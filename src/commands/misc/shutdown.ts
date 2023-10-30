import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';
import { EmbedBuilder } from 'discord.js';

export const data: CommandData = {
  name: 'shutdown',
  description: 'shutdown',
};

export async function run({ interaction, client }: SlashCommandProps) {
  await interaction.reply({ content: `I feel a bit sleepy ${interaction.user.displayName}.` });

  setTimeout(async () => {
    await interaction.editReply({
      content: ``,
      embeds: [new EmbedBuilder().setColor('#dc2626').setDescription(`${client.user.username} has fallen asleep ...`)],
    });
    client.destroy();
    process.exit();
  }, 5000);
}

export const options: CommandOptions = {
  devOnly: true,
  guildOnly: true,
  userPermissions: ['Administrator', 'AddReactions'],
  botPermissions: ['Administrator', 'AddReactions'],
  deleted: false,
};
