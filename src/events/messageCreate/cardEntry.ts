import {
  type Message,
  type APIEmbed,
  EmbedBuilder,
  TextChannel,
} from 'discord.js';
import type { CommandOptions } from 'commandkit';

async function sendEmbed(
  message: Message<true>,
  karutaEmbed: APIEmbed,
  price: string
) {
  const embed = new EmbedBuilder()
    .setTitle('Listing Details')
    .addFields({
      name: price,
      value: `${karutaEmbed.description}`,
      inline: true,
    })
    .setImage(karutaEmbed.image?.url as string)
    .setColor('#6366f1')
    .setTimestamp()
    .setFooter({
      iconURL: message.author.avatarURL() as string,
      text: message.author.username,
    });

  const desiredChannelID = '1168705317979312178';
  const channel = message.guild?.channels.cache.find(
    (c) => c.id === '1168705317979312178'
  );
  // Retrieve the desired channel by its ID
  const desiredChannel = message.guild?.channels.cache.get(desiredChannelID);
  if (desiredChannel instanceof TextChannel) {
    await desiredChannel.send({ embeds: [embed] });
    message.reply(`Your listing was created in ${channel}`);
  }
}

export default async function (message: Message<true>) {
  if (message.channelId !== '1168704139816079422') return;

  if (message.content.toLowerCase().includes('kv') && !message.author.bot) {
    console.log('[Card Entry] New User entry');
    message.reply('Please enter the price of your listing');

    message.channel
      .awaitMessages({
        errors: ['time'],
        max: 1,
        time: 10000,
        filter: (m) => m.author.id === message.author.id,
      })
      .then(async (price) => {
        const lastKarutaMessages = await message.channel.messages.fetch({
          limit: 4,
        });

        const lastKarutaFilteredMessage = [...lastKarutaMessages].find((el) => {
          return (
            el[1].embeds.length > 0 &&
            el[1].embeds[0].description?.includes(message.author.id)
          );
        })![1];

        sendEmbed(
          message,
          lastKarutaFilteredMessage.embeds[0].toJSON(),
          price.first()?.content as string
        );
      })
      .catch(() => {
        message.reply('No message collected after 10 seconds.');
      });
  }
}

export const options: CommandOptions = {
  devOnly: false,
  guildOnly: true,
  userPermissions: ['Administrator', 'AddReactions'],
  botPermissions: ['Administrator', 'AddReactions'],
  deleted: false,
};

//!DEPRECATED - Karuta Embed Description data manipulation
// const splitStrings = karutaEmbed.description?.split('·');
// const karutaData = {
//   owner: splitStrings?.[0].split('Owned by ')[1].split('\n')[0],
//   code: splitStrings?.[0].split('\n\n')[1],
//   quality: splitStrings?.[1],
//   print: splitStrings?.[2],
//   edition: splitStrings?.[3],
//   anime: splitStrings?.[4],
//   character: splitStrings?.[5],
// };
