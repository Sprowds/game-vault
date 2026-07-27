import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect, useCallback } from "react";
import { loadLibrary, saveLibrary } from "../utils/libraryLocalStorage";
import { libraryGameFormToggle } from "../utils/libraryGameFormToggle";

const initialState = {
  gameList: loadLibrary(),
  modal: {
    isOpen: false,
    mode: {
      gameForm: false,
      deleteConfirmationForm: false,
    },
    data: null,
    func: null,
  },
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addNewGame(state, action) {
      // Добавление новой игры
      const newGame = action.payload;
      if (newGame.cover.length === 0) {
        newGame.cover = "src/assets/img/dota.jpg";
      }
      state.gameList.push({
        id: crypto.randomUUID(),
        ...newGame,
        rating: Number(newGame.rating),
      });
      saveLibrary(state.gameList);
    },
    editGame(state, action) {
      // Редактирование уже существующей игры
      const newDataOfGame = action.payload;
      if (newDataOfGame.cover.length === 0) {
        newDataOfGame.cover = "src/assets/img/dota.jpg";
      }

      const index = state.findIndex((item) => item.id === newDataOfGame.id);
      state.gameList[index] = {
        ...newDataOfGame,
        rating: Number(newDataOfGame.rating),
      };
      saveLibrary(state.gameList);
    },
    deleteGameById(state, action) {
      // Удаление игры по её id
      const gameId = action.payload;
      const index = state.gameList.findIndex((item) => item.id === gameId);

      state.gameList.splice(index, 1);
      saveLibrary(state.gameList);
    },
    toggleModal(state, action) {
      const { isActive, mode, data, func } = action.payload;

      state.modal = { isActive, ...state.modal, data, func };
      for (let key in state.modal.mode) {
        state.modal.mode[key] = false;
      }
      state.modal.mode[mode] = true;
    },
  },
});

export const { addNewGame, editGame, deleteGameById, toggleModal } =
  librarySlice.actions;
export default librarySlice.reducer;

const useGamesLibrary = () => {
  const [gameList, setGameList] = useState(loadLibrary);

  useEffect(() => {
    saveLibrary(gameList);
  }, [gameList]);

  const [gameFormActive, setGameFormActive] = useState({
    action: "",
    game: {},
    func: function () {},
  });

  const gameFormToogle = useCallback(
    (action, gameId = "") => {
      libraryGameFormToggle(
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
