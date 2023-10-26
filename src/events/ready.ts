import { event, Events } from '../utils/index.js';

export default event(Events.ClientReady, ({ log }, client) => {
  const { user } = client;
  return log(`Mad Sword King ${client.user.username} is ready for battle.`);
});
