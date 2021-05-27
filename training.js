// напиши скрипт, который на вход принимает строку,
// а на выход отдает массив строк со всеми возможными размещениями точек между букв.

let dotSplittedWords = [];

function stringToDottedArray(string) {
  let newString = newStringWithDots(string);

  if (!dotSplittedWords.includes(newString)) {
    newString !== string && dotSplittedWords.push(newString);
    stringToDottedArray(string);
  }

  return dotSplittedWords;
}

function newStringWithDots(newString) {
  const length = newString.length;
  const randomizer = () => Math.floor(Math.random() * 2);
  const newDottedString = newString
    .split("")
    .map((el, index) =>
      index != length - 1 ? (randomizer() ? `${el}.` : el) : el
    )
    .join("");
  return newDottedString !== newString
    ? newDottedString
    : newStringWithDots(newString);
}

console.log("Have this result:", stringToDottedArray("Hello"));
