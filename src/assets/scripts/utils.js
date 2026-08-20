

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

// decode entité html 
export function decodeHtml (text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;

}

// random number
export function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// attemps to fetch api

export async function fetchquiz (arr) {
  const maxAttempt = 3;
  for (let attempt = 0; attempt < maxAttempt; attempt++) {
    const randomCategory = randomInt(9, 32);
    const difficultyRandom = arr[randomInt(0, 3)];
    const url = `https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=${difficultyRandom}&type=multiple`;

    const response = await fetch(url);
    const data = await response.json();
    const results = await data.results;

    if (results && results.length > 0) {
      return results;
    }
  }
  throw new Error("Impossible de récupérer les questions");
}