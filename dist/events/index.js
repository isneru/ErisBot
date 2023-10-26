"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ready_js_1 = __importDefault(require("./ready.js"));
const ping_js_1 = __importDefault(require("./ping.js"));
const coinflip_js_1 = __importDefault(require("./coinflip.js"));
const avatar_js_1 = __importDefault(require("./avatar.js"));
exports.default = [ready_js_1.default, ping_js_1.default, coinflip_js_1.default, avatar_js_1.default];
