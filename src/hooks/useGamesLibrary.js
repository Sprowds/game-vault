import { useState, useEffect, useCallback } from "react";
import { loadLibrary, saveLibrary } from "../utils/libraryLocalStorage";
import {
  addNewGameToLibrary,
  editGameInLibraryById,
  deleteGameFromLibraryById,
} from "../utils/libraryOperations";
import { libraryGameFormToggle } from "../utils/libraryGameFormToggle";

export const useGamesLibrary = () => {
  const [gameList, setGameList] = useState(loadLibrary);

  useEffect(() => {
    saveLibrary(gameList);
  }, [gameList]);

  const [gameFormActive, setGameFormActive] = useState({
    isActive: false,
    action: "",
    game: {},
    func: function () {},
  });

  function addNewGame(newGame) {
    addNewGameToLibrary(newGame, setGameList);
  }

  function editGameById(gameNewData) {
    editGameInLibraryById(gameNewData, setGameList);
  }

  const deleteGameById = useCallback((id) => {
    deleteGameFromLibraryById(id, setGameList);
  }, []);

  const gameFormToogle = useCallback(
    (isActive, action, gameId = "") => {
      libraryGameFormToggle(
        isActive,
        action,
        gameId,
        setGameFormActive,
        gameList,
        editGameById,
        addNewGame,
      );
    },
    [gameList],
  );

  return {
    gameList,
    gameFormActive,
    gameFormToogle,
    deleteGameById,
  };
};
