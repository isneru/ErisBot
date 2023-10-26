"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVar = void 0;
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const EnvFilePath = (0, path_1.resolve)(process.cwd(), '.env');
(0, dotenv_1.config)({ path: EnvFilePath });
const getEnvVar = (name, fallback) => {
    const value = process.env[name] ?? fallback;
    if (value === undefined) {
        throw new Error(`Environment variable ${name} is not set.`);
    }
    return value;
};
exports.getEnvVar = getEnvVar;
