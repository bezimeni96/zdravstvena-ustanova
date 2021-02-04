class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, karton) {
    super(ime, prezime);
    this.jmbg = jmbg;
    this.karton = karton;
    this.izabraniDoktor = null;
    this.zakazaniPregledi = [];

    Loger.logovanje(`Kreiran je pacijent "${ime} ${prezime}"`);
  }

  izaberiDoktora(doktor) {
    doktor.dodajPacijenta(this);
    this.izabraniDoktor = doktor;
  }

  dodajPregled(pregled) {
    this.zakazaniPregledi.push(pregled);
  }

  obaviPregled() {
    if (this.zakazaniPregledi.length > 0) {
      const pregled = this.zakazaniPregledi[0];
      pregled.simulirajPregled(this);
      this.zakazaniPregledi.shift();
    } else {
      console.log("Nemate zakazan ni jedan pregled.")
    }
  }
}