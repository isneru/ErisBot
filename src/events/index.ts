import { Event } from '../utils/index.js';
import ready from './ready.js';
import ping from './ping.js';
import coinflip from './coinflip.js';
import avatar from './avatar.js';

export default [ready, ping, coinflip, avatar] as Event[];
