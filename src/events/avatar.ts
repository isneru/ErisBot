import { event, Events } from '../utils/index.js';

const pingVariants = ['e!avatar', 'eavatar', 'ea'];

export default event(Events.MessageCreate, ({ log }, client) => {
  if (pingVariants.includes(client.content)) {
    return client.reply(`${client.author.displayAvatarURL()}`);
  }
});
