import { event, Events } from '../utils/index.js';

const pingVariants = ['e!coinflip', 'ecoinflip', 'ecf'];

function generateCoin() {
  let coin = Math.floor(Math.random() * 2);
  return coin;
}

export default event(Events.MessageCreate, ({ log }, msg) => {
  if (pingVariants.includes(msg.content)) {
    return msg.reply(generateCoin() === 0 ? 'Crown' : 'Tails');
  }
});
