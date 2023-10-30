"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
const path = require("path");
const fs = require("fs");
const getAllFiles = (directory, foldersOnly = false) => {
    let fileNames = [];
    const files = fs.readdirSync(directory, { withFileTypes: true });
    for (const file of files) {
        const filePath = path.join(directory, file.name);
        if (foldersOnly) {
            file.isDirectory() && fileNames.push(filePath);
        }
        else {
            file.isFile() && fileNames.push(filePath);
        }
    }
    return fileNames;
};
exports.getAllFiles = getAllFiles;
