const mii1: Record<string, number> = {
  myKey: 42,
};

const mii2: Record<number, string> = {
  42: 'myKey',
};

const mii2b: Record<number, string> = ['a', 'b', 'c'];

console.log(mii1);
console.log(mii2);
console.log(mii2b);
