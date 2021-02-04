class Osoba {
  constructor(ime, prezime) {
    if (this.constructor === Osoba) {
      throw new Error('Abstraktna klasa Osoba ne moze biti instancirana!');
    }
    this.ime = ime;
    this.prezime = prezime;
  }
}