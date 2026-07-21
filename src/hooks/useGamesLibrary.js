import { useState, useEffect } from "react";
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

  function gameFormToogle(isActive, action, gameId = "") {
    libraryGameFormToggle(
      isActive,
      action,
      gameId,
      setGameFormActive,
      gameList,
      editGameById,
      addNewGame,
    );
  }

  function addNewGame(newGame) {
    addNewGameToLibrary(newGame, setGameList);
  }

  function editGameById(gameNewData) {
    editGameInLibraryById(gameNewData, setGameList);
  }

  function deleteGameById(id) {
    deleteGameFromLibraryById(id, setGameList);
  }

  return {
    gameList,
    gameFormActive,
    gameFormToogle,
    deleteGameById,
  };
};
