import { globSync, renameSync } from 'node:fs';

const fileNames = globSync('*.jpg').toSorted((a, b) => a.localeCompare(b));

for (const [index, fileName] of fileNames.entries()) {
  renameSync(fileName, `xxx-${index + 1}-yyyy-mm-dd.jpg`);
}
