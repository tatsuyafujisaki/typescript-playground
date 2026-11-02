function arrayExample() {
  const xs = ['a', 'b', 'c'];
  const ys = xs.map(x => x.toUpperCase());
  console.log(ys); // [ A, B, C ]

  const zs = xs.map((x, i) => x.toUpperCase() + i);
  console.log(zs); // [ A0, B1, C2 ]
}

console.log(arrayExample());
