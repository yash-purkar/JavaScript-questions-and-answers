// Memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input in cache and returns the result from this.



let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    }
    else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  }
}

let total = memoize(calc);

console.time();
console.log(total(5));
console.timeEnd();

console.time();
console.log(total(5));
console.timeEnd();

// So we can see for 1st time of input 5 it's taking 6.306ms and for second time, because the for loop is running 5 times and it took the 6.306ms, and after returning the sum of 1st time input number we stored that in cache object.
// Then if we pass that number again which is present inside the catch object we just return that , didn't call the calc function again. So it took just 0.333ms