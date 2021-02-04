class PregledNivoSecera extends Pregled {
  constructor(datum, vreme) {
    super(datum, vreme);
  }

  simulirajPregled(pacijent) {
    this.vrednost = (Math.random() * (12 - 2) + 2).toFixed(3);
    this.vremePoslednjegObroka = 8;

    console.log(`Pacijent ${pacijent.ime} je obavio pregled nivoa secera u krvi, vrednost: ${this.vrednost}, poslednji obrok bio pre: ${this.vremePoslednjegObroka} casova.`);
  }
}