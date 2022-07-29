import { Dog } from './09-protected'

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;
// }

function getValue<myType>(value:myType) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').length;
getValue<number[]>([11,2,62,5]).forEach;

const snoopy = new Dog('snoopy','amepablo');
getValue<Dog>(snoopy).greeting;
