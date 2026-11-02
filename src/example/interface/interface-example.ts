interface MyInterface1 {
  x: number | string;
  readonly iAmReadOnly: number | string;
  f1: () => void | string;
  f2: () => number | string;
}

const mi: MyInterface1 = {
  x: 42,
  iAmReadOnly: 'a',
  f1: function () {
    console.log('Hello');
  },
  f2: function () {
    return 'Hello';
  },
};

mi.x = 43;
mi.x = 'a';
// mi.iAmReadOnly = 'a'; // Error because it is read-only.

mi.f1();
console.log(mi.f2());
