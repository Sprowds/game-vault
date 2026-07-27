// Добавление игры в Библиотеку
export function addNewGameToLibrary(newGame, setGameList) {
  // Если не указана ссылка на обложку, то ставим дефолтную
  if (newGame.cover.length === 0) {
    newGame.cover = "src/assets/img/dota.jpg";
  }
  // Меняем state библиотеки, добавляя новую игру в конец массива
  setGameList((prev) => [
    ...prev,
    {
      // Генерируем уникальный id для новой игры
      id: crypto.randomUUID(),
      ...newGame,
      // Преобразуем рейтинг в число, так как в форме он приходит как строка
      rating: Number(newGame.rating),
    },
  ]);
}

// Редактирование игры в Библиотеке по id
export function editGameInLibraryById(gameNewData, setGameList) {
  // Если не указана ссылка на обложку, то ставим дефолтную
  if (gameNewData.cover.length === 0) {
    gameNewData.cover = "src/assets/img/dota.jpg";
  }
  // Меняем state библиотеки, заменяя старую игру на новую по id
  setGameList((prevGames) =>
    prevGames.map((game) => {
      if (game.id === gameNewData.id)
        return { ...gameNewData, rating: Number(gameNewData.rating) };
      else return game;
    }),
  );
}

// Удаление игры из Библиотеки по id
export function deleteGameFromLibraryById(id, setGameList) {
  setGameList((prev) => prev.filter((game) => game.id !== id));
}
