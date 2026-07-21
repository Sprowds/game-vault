export function addNewGameToLibrary(newGame, setGameList) {
  if (newGame.cover.length === 0) {
    newGame.cover = "src/assets/img/dota.jpg";
  }
  setGameList((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      ...newGame,
      rating: Number(newGame.rating),
    },
  ]);
}

export function editGameInLibraryById(gameNewData, setGameList) {
  if (gameNewData.cover.length === 0) {
    gameNewData.cover = "src/assets/img/dota.jpg";
  }
  setGameList((prevGames) =>
    prevGames.map((game) => {
      if (game.id === gameNewData.id)
        return { ...gameNewData, rating: Number(gameNewData.rating) };
      else return game;
    }),
  );
}

export function deleteGameFromLibraryById(id, setGameList) {
  setGameList((prev) => prev.filter((game) => game.id !== id));
}
