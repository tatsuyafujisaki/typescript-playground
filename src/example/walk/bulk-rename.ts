import { readdirSync, renameSync } from 'node:fs';

const extension = '.jpg';

const fileNames = readdirSync('.', { withFileTypes: true })
  .filter(file => file.isFile() && file.name.toLowerCase().endsWith(extension))
  .map(file => file.name)
  .toSorted((a, b) => a.localeCompare(b));

for (const [index, fileName] of fileNames.entries()) {
  renameSync(fileName, `xxx-${index + 1}-yyyy-mm-dd${extension}`);
}
