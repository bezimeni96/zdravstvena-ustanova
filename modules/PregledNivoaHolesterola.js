class PregledNivoaHolesterola extends Pregled {
  constructor(datum, vreme) {
    super(datum, vreme);
  }

  simulirajPregled(pacijent) {
    this.vrednost = (Math.random() * (5 - 1) + 2).toFixed(1);
    this.vremePoslednjegObroka = "12h";

    console.log(`Pacijent ${pacijent.ime} je obavio pregled nivoa holesterola u krvi, vrednost: ${this.vrednost}, poslednji obrok bio pre: ${this.vremePoslednjegObroka}`);
  }
}