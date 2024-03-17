function useIterator(array) {
  let i = 0;
  return () => {
    const element = array[i];
    i++;
    return element;
  };
}

//iteratorable object
//
let iteratableObject = {
  data: [10, 20, 30, 40],
  [Symbol.iterator]: function () {
    let index = 0;
    let data = this.data;
    return {
      next: function () {
        if (index < data.length) {
          return {
            value: data[index++],
            done: false,
          };
        } else {
          return {
            vaalue: undefined,
            done: true,
          };
        }
      },
    };
  },
};
for (let it of iteratableObject) {
  console.log(it);
}
const myIterator = useIterator([1, 2, 3, 4]);
console.log(myIterator());
console.log(myIterator());
