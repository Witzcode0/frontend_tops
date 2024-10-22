// Write to print Fibonacci series up to given numbers?

function Fibbo(n) {
  let fs = [0, 1];

  for (let i = 2; i < n; i++) {
    fs[i] = fs[i - 1] + fs[i - 2];
  }

  return fs;
}

console.log(Fibbo(10));
