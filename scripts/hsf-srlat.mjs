/**
 * Servisch staat op hrmforce.com in Latijns schrift. DeepL kan Servisch in het
 * Cyrillisch teruggeven; deze omzetting maakt daar letter voor letter Latijns
 * schrift van (vaste Servische transliteratie: Љ = Lj, Њ = Nj, Џ = Dž, enz.).
 * HTML-tags en {plaatshouders} bevatten geen Cyrillisch en blijven dus gelijk.
 */
const KAART = {
  А: "A", Б: "B", В: "V", Г: "G", Д: "D", Ђ: "Đ", Е: "E", Ж: "Ž", З: "Z", И: "I", Ј: "J", К: "K",
  Л: "L", Љ: "Lj", М: "M", Н: "N", Њ: "Nj", О: "O", П: "P", Р: "R", С: "S", Т: "T", Ћ: "Ć", У: "U",
  Ф: "F", Х: "H", Ц: "C", Ч: "Č", Џ: "Dž", Ш: "Š",
  а: "a", б: "b", в: "v", г: "g", д: "d", ђ: "đ", е: "e", ж: "ž", з: "z", и: "i", ј: "j", к: "k",
  л: "l", љ: "lj", м: "m", н: "n", њ: "nj", о: "o", п: "p", р: "r", с: "s", т: "t", ћ: "ć", у: "u",
  ф: "f", х: "h", ц: "c", ч: "č", џ: "dž", ш: "š",
  // Russische letter die DeepL soms in Servisch zet.
  Й: "J", й: "j",
};
// Een hoofdletter Lj/Nj/Dž in een woord dat helemaal in hoofdletters staat wordt LJ/NJ/DŽ.
export function naarLatijns(s) {
  return s.replace(/[Ѐ-ӿ]+/g, (woord) => {
    const hoofd = woord.length > 1 && woord === woord.toUpperCase();
    return [...woord].map((c) => {
      const l = KAART[c] ?? c;
      return hoofd ? l.toUpperCase() : l;
    }).join("");
  });
}
