const getRandomKarton = () => Math.floor(Math.random() * 100) + 1;
const getRandomJMBG = () => Math.floor(Math.random() * 10000000000000) + 1;


const milan = new Doktor('Milan', 'Milanovic', 'kardiolog');
const dragan = new Pacijent('Dragan', 'Dragic', getRandomJMBG(), getRandomKarton());
dragan.izaberiDoktora(milan);
milan.zakaziPregled("2021-10-12", "15:18:22", PregledNivoSecera, dragan);
milan.zakaziPregled("2021-24-12", "20:01:88", PregledKrvnogPritiska, dragan);
dragan.obaviPregled();
dragan.obaviPregled();