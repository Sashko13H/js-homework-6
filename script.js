// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
  constructor({ name }) {
    this.firstName = "";
    this.number = "";
    this.name = name;
  }
  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.number = nameRow[1];
  }
  get name() {
    return `firstName: ${this.firstName} number: ${this.number}`;
  }
}

const Mykola = new Abonent({
  name: "Alex 099-999-99-91",
});
const Vitaliy = new Abonent({
  name: "Olena 099-999-99-92",
});
const Volodymyr = new Abonent({
  name: "Bogdan 099-999-99-93",
});

console.log(Mykola.name);
console.log(Vitaliy.name);
console.log(Volodymyr.name);