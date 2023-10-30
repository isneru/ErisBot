"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEvents = exports.event = exports.Events = void 0;
// Export events enum through here to reduce the amount of imports
var discord_js_1 = require("discord.js");
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return discord_js_1.Events; } });
// Creates an event structure
function event(key, callback) {
    return { key, callback };
}
exports.event = event;
// Registers events to the client
function registerEvents(client, events) {
    for (const { key, callback } of events) {
        client.on(key, (...args) => {
            // Create a new log method for this event.
            const log = console.log.bind(console, `[Event]: ${key}`);
            // Try to catch uncaught errors
            try {
                callback({ client, log }, ...args);
            }
            catch (err) {
                // Log the error.
                log(`[Uncaught Error]`, err);
            }
        });
    }
}
exports.registerEvents = registerEvents;
