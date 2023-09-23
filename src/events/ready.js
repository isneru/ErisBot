const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Mad Sword King ${client.user.displayName}, has woken up!`);
  },
};
