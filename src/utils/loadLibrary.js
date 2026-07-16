import initialGamesData from "../data/games.json";

function loadLibrary() {
  try {
    const savedLibrary = JSON.parse(localStorage.getItem("library"));

    if (savedLibrary === null) return initialGamesData;

    return savedLibrary;
  } catch {
    return initialGamesData;
  }
}

export default loadLibrary;
