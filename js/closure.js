const createCounter = () => {
  let counter = 0;
  const increment = () => {
    counter += 1;
  };
  const decrement = () => {
    counter -= 1;
  };
  const reset = () => {
    counter = 0;
  };
  const getvalue = () => {
    return counter;
  };
  return { increment, decrement, reset, getvalue };
};
let intialCounter = createCounter();
initialCounter.increment();
initialCounter.increment();
console.log(initialCounter.getvalue()); // 2

initialCounter.decrement();
console.log(initialCounter.getvalue()); // 1

initialCounter.reset();
console.log(initialCounter.getvalue()); // 0
