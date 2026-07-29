import { saveLibrary } from "../utils/libraryLocalStorage";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState().library;
  if (action.type.startsWith(`library/`)) {
    saveLibrary(state.gameList);
  }

  return result;
};
