import INITIAL_NEW_GAME from "./INITIAL_NEW_GAME";

export function libraryGameFormToggle(
  action,
  gameId = "",
  setGameFormActive,
  gameList,
  editGameByIdFunction,
  addNewGameFunction,
) {
  if (action === "edit") {
    setGameFormActive({
      action,
      game: gameList.find((game) => {
        if (game.id === gameId) return game;
      }),
      func: editGameByIdFunction,
    });
  } else {
    setGameFormActive({
      action,
      game: INITIAL_NEW_GAME,
      func: addNewGameFunction,
    });
  }
}
