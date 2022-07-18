// Uso de clases
const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1986, 4, 26); // 0 enero 11 dic
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);


// Crear una clase
export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// Creación y ejecución de una instancia
const myDate = new MyDate(1986, 4, 26);
console.log(myDate);
