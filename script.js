
const dictionary = {
  "hello": "heil",
  "good": "góðr",
  "day": "dagr",
  "friend": "vinr",
  "warrior": "drengr",
  "love": "ást",
  "honor": "sæmd",
  "you": "þú",
  "are": "ert",
  "strong": "sterkr",
  "king": "konungr",
  "queen": "drottning"
};

const runes = {
  "a": "ᛅ", "b": "ᛒ", "c": "ᛍ", "d": "ᛏ", "e": "ᛁ", "f": "ᚠ",
  "g": "ᚴ", "h": "ᚼ", "i": "ᛁ", "j": "ᛁ", "k": "ᚴ", "l": "ᛚ",
  "m": "ᛘ", "n": "ᚾ", "o": "ᚢ", "p": "ᛒ", "q": "ᚴ", "r": "ᚱ",
  "s": "ᛋ", "t": "ᛏ", "u": "ᚢ", "v": "ᚠ", "w": "ᚠ", "x": "ᛋ",
  "y": "ᛁ", "z": "ᛋ", "þ": "ᚦ", "æ": "ᛅ", "ø": "ᚯ", "ö": "ᚢ", "ð": "ᚧ", " ": " "
};

function toYoungerFuthark(text) {
  return [...text.toLowerCase()].map(c => runes[c] || c).join('');
}

function translateText() {
  const input = document.getElementById("inputText").value.toLowerCase();
  const words = input.split(/\s+/);
  const translatedWords = words.map(word => dictionary[word] || `[${word}]`);
  const translatedText = translatedWords.join(" ");
  const runicText = toYoungerFuthark(translatedText);

  document.getElementById("outputText").innerHTML = `
    <strong>Old Norse:</strong> ${translatedText}<br>
    <strong>Younger Futhark:</strong> <span class="runes">${runicText}</span>
  `;
}
