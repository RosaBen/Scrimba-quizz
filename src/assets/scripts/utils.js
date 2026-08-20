// shuffle array
export function shuffleArray (arr) {
  if (!Array.isArray(arr)) { return []; }
  return [...arr].sort(() => Math.random() - 0.5);
}

// select 5 questions from fetch results
export function selectItems (arr, count) {
  if (!Array.isArray(arr)) { return []; }
  return shuffleArray(arr).slice(0, count);

}

// // decode entité html 
// export function decodeHtml (text) {
//   const textArea = document.createElement("textarea");
//   textArea.innerHTML = text;
//   return textArea.value;

// }