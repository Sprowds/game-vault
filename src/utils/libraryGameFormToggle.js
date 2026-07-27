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
/* Если action === "edit", то мы ищем игру по gameId в gameList и устанавливаем её в состояние gameFormActive 
вместе с функцией редактирования. Если action не "edit", а "add" то мы устанавливаем новое состояние с 
INITIAL_NEW_GAME и функцией добавления новой игры. */
