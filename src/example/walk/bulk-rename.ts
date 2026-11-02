import * as fs from 'node:fs';
import * as path from 'node:path';

const extension = '.jpg';
const cwd = process.cwd();

const files = fs.readdirSync(cwd, { withFileTypes: true });

const sortedEntries = files
  .filter(file => file.isFile() && file.name.toLowerCase().endsWith(extension))
  .map(file => path.join(cwd, file.name))
  .toSorted((a, b) => a.localeCompare(b));

sortedEntries.forEach((filePath, index) => {
  fs.renameSync(
    filePath,
    path.join(cwd, `xxx-${index + 1}-yyyy-mm-dd${extension}`),
  );
});
