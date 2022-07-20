console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,2,2,1,2,1,7,4,1));


class MyMath {
  static PI = 3.14;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => max >= item ? max: item, 0)
  }
}

// const math = new MyMath();
// math.PI;
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(18,2,29,2,3,1));
const numbers = [18,2,29,2,3,1,98888];
console.log('MyMath.max', MyMath.max(...numbers));
