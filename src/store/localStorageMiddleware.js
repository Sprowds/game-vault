import { saveLibrary } from "../utils/libraryLocalStorage";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState().library;

  const gameListActions = [
    `library/addNewGame`,
    `library/editGame`,
    `library/deleteGameById`,
  ];

  if (gameListActions.includes(action.type)) {
    saveLibrary(state.gameList);
  }

  return result;
};
