import INITIAL_NEW_GAME from "./INITIAL_NEW_GAME";

export function libraryGameFormToggle(
  isActive,
  action,
  gameId = "",
  setGameFormActive,
  gameList,
  editGameByIdFunction,
  addNewGameFunction,
) {
  if (action === "edit") {
    setGameFormActive({
      isActive,
      action,
      game: gameList.find((game) => {
        if (game.id === gameId) return game;
      }),
      func: editGameByIdFunction,
    });
  } else {
    setGameFormActive({
      isActive,
      action,
      game: INITIAL_NEW_GAME,
      func: addNewGameFunction,
    });
  }
}
