import {
  type Message,
  type Client,
  EmbedBuilder,
  TextChannel,
  ChatInputCommandInteraction,
  CacheType,
  MessageCollector,
} from 'discord.js';
import type { CommandKit, CommandOptions } from 'commandkit';

async function getPrice(message: Message<true>) {
  let price;

  if (price === undefined || price === '') {
    await message.channel.send('What do you want for this?');
    price = message.content;
  }

  return price;
}

export default async function (
  message: Message<true>,
  interaction: ChatInputCommandInteraction<CacheType>,
  client: Client<true>,
  handler: CommandKit
) {
  if (
    message.channelId === '1154079321913307167' &&
    message.content.toLowerCase().includes('kv') &&
    !message.author.bot
  ) {
    console.log('[Card Entry] New User entry');
  } else if (
    //? Validate if message was sent in the right channel and if it was karuta and if it has embeds
    (message.channelId === '1154079321913307167' && message.author.id === '646937666251915264' && message.embeds) ||
    //? Validate if  message was sent in the right channel and if it was from an user
    (message.channelId === '1154079321913307167' && !message.embeds)
  ) {
    let price;

    if (price === undefined || price === '') {
      message.channel.send('What do you want for this?').then(() => {
        const collectorFilter = (response: any) => response.author.id === message.author.id;
        const collector = new MessageCollector(message.channel, {
          filter: collectorFilter,
          max: 1, // Collect only one response
          time: 20000, // Set a reasonable time limit for the user to respond
        });

        collector.on('collect', (userResponse) => {
          price = userResponse.content;
          // Continue with the embedding and message sending here.
          // ...
        });

        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            message.channel.send('You took too long to respond.');
          }
        });
      });
    }

    // All data recovered from Karuta Embed
    const karutaEmbed = message.embeds[0]?.toJSON();

    // Create New Market Embed with the usage of Karuta's Data
    const embed = await new EmbedBuilder()
      .setTitle('Listing Details')
      .addFields({ name: price || 'Card Details', value: `${karutaEmbed.description}`, inline: true })
      .setImage(karutaEmbed.image?.url as string)
      .setColor('#6366f1')
      .setTimestamp();

    console.log(price);
    const desiredChannelID = '1168226412717678702';
    const channel = message.guild?.channels.cache.find((c) => c.id === '1168226412717678702');
    // Retrieve the desired channel by its ID
    const desiredChannel = message.guild?.channels.cache.get(desiredChannelID);
    if (desiredChannel instanceof TextChannel) {
      desiredChannel.send({ embeds: [embed] });
    }
    message.reply(`Your listing was created in ${channel}`);
    setTimeout(() => {
      message.delete();
    }, 5000);
  }
}
// else {
//   //reply to the last message from a user asking for PRICE, using message collector *maybe*
//   const collectorFilter = (m) => m.content.includes('kv');
//   const collector = interaction.channel.createMessageCollector({ filter: collectorFilter, time: 15000 });
//   collector.on('collect', (m) => console.log(`Collected ${m.content}`));
//   collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));
// }

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
