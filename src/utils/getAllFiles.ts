import path = require('path');
import fs = require('fs');

export const getAllFiles = (directory: string, foldersOnly: boolean = false) => {
  let fileNames: string[] = [];

  const files = fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      file.isDirectory() && fileNames.push(filePath);
    } else {
      file.isFile() && fileNames.push(filePath);
    }
  }

  return fileNames;
};
