import gamesData from "../data/games.json";

export function loadLibrary() {
  try {
    const savedLibrary = JSON.parse(localStorage.getItem("library"));
    if (Array.isArray(savedLibrary) && savedLibrary.length !== 0) {
      return savedLibrary;
    }

    return gamesData;
  } catch {
    return gamesData;
  }
}

export function saveLibrary(gameList) {
  localStorage.setItem("library", JSON.stringify(gameList));
}
