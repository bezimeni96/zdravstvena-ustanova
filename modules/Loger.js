class Loger {
  static logovanje(poruka) {
    var datum = new Date();
    console.log(`[${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()} ${datum.getHours()}:${datum.getMinutes()}] ${poruka}`);
  }
}