import * as fs from 'fs';
import * as path from 'path';

const extension = '.jpg';
const cwd = process.cwd();

const files = fs.readdirSync(cwd, {withFileTypes: true});

const entries = files
  .filter(
    file =>
      !file.isDirectory() &&
      (file.name.endsWith(extension.toLowerCase()) ||
        file.name.endsWith(extension.toUpperCase())),
  )
  .map(file => path.join(cwd, file.name));

const sortedEntries = entries.sort((a, b) => a.localeCompare(b));

sortedEntries.forEach((filePath, index) => {
  fs.renameSync(
    filePath,
    path.join(cwd, `xxx-${index + 1}-yyyy-mm-dd${extension}`),
  );
});
