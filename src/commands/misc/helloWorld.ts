import type { CommandData, SlashCommandProps, CommandOptions } from 'commandkit';

export const data: CommandData = {
  name: 'helloworld',
  description: 'Hello World!',
};

export function run({ interaction, client }: SlashCommandProps) {
  interaction.reply(`hello World`);
}

export const options: CommandOptions = {
  devOnly: false,
  guildOnly: true,
  userPermissions: ['Administrator', 'AddReactions'],
  botPermissions: ['Administrator', 'AddReactions'],
  deleted: false,
};
