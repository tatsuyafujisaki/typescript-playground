// Usage:
//   npm install
//   npx playwright install
//   node --experimental-strip-types src/playwright/hanreiSearch.ts <元号> <年> <月> <日>
//
// For example:
//   node --experimental-strip-types src/playwright/hanreiSearch.ts 平成 23 12 19

import { chromium, type Page } from 'playwright';

async function selectDate(page: Page, era: string, year: string, month: string, day: string) {
  for (const [label, value] of Object.entries({ 元号: era, 年: year, 月: month, 日: day })) {
    await page.getByLabel(`裁判年月日 - 検索範囲 ｰ 開始${label}の選択`, { exact: true }).selectOption(value);
  }
}

async function main() {
  const [era, year, month, day] = process.argv.slice(2);

  if (!day) {
    console.error('Usage: node --experimental-strip-types src/playwright/hanreiSearch.ts <元号> <年> <月> <日>');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.courts.go.jp/hanrei/search2/');
  await page.waitForLoadState('networkidle');
  await page.getByText('期日指定').nth(1).click();
  await selectDate(page, era, year, month, day);
  await page.getByRole('button', { name: '検索', exact: true }).click();
  await page.pause();
}

main().catch(console.error);
