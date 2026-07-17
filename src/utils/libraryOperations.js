export function addNewGameToLibrary(newGame, setGameList) {
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
