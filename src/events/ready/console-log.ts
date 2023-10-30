import type { Client } from 'discord.js';
import type { CommandKit } from 'commandkit';

export default function (c: Client<true>, client: Client<true>, handler: CommandKit) {
  console.log(`Mad Sword King ${c.user.username} is ready for battle!`);
}
