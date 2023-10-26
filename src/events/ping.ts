import { event, Events } from '../utils/index.js';

const pingVariants = ['e!ping', 'ep', 'e!p'];

export default event(Events.MessageCreate, ({ log }, msg) => {
  if (pingVariants.includes(msg.content)) {
    return msg.reply('pong');
  }
});
