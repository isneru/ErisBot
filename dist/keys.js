"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keys = void 0;
const index_js_1 = require("./utils/index.js");
exports.Keys = {
    clientToken: (0, index_js_1.getEnvVar)('CLIENT_TOKEN'),
};
exports.default = exports.Keys;
