function japaneseDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

function yesterday(date: Date = new Date()): Date {
  const d = new Date(date);
  d.setDate(d.getDate() - 1);
  return d;
}

function yyyymmdd(date: Date = new Date()): string {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

console.log(japaneseDate());
console.log(yesterday());
console.log(yyyymmdd());
