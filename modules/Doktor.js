class Doktor extends Osoba {
  constructor(ime, prezime, specijalnost) {
    super(ime, prezime);
    this.specijalnost = specijalnost;
    this.pacijenti = [];

    Loger.logovanje(`Kreiran je doktor "${ime} ${prezime}"`);
  }

  dodajPacijenta(pacijent) {
    if (!this.pacijentJeVecKodOvogDoktora(pacijent)) {
      this.pacijenti.push(pacijent);
    }
  }

  pacijentJeVecKodOvogDoktora(pacijent) {
    return this.pacijenti.includes(pacijent);
  }

  zakaziPregled(datum, vreme, vrsta, pacijent) {
    if (Pregled.vrstePregleda.includes(vrsta.name)) {
      pacijent.dodajPregled(new vrsta(datum, vreme));
      Loger.logovanje(`Pacijentu "${pacijent.ime} ${pacijent.prezime}" zakazan je ${vrsta.name} za ${datum} ${vreme}`)
    } else {
      console.log("Ta vrsta pregleda jos uvek nije dostupna u ovoj zdravstvenoj ustanovi.")
    }
  }
}