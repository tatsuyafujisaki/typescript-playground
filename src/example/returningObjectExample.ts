// Old-school way of returning an object.
let f1 = (x: number) => {
  return {x};
};

// Simple way of returning an object.
const f2 = (x: number) => ({x});

f1 = f2;

console.log(f1);
