import { createSlice } from "@reduxjs/toolkit";
import { loadLibrary } from "../utils/libraryLocalStorage";

const initialState = {
  gameList: loadLibrary(),

  modal: {
    isOpen: false,
    modalType: null,
  },

  gameForm: {
    mode: null,
    game: null,
  },

  deleteConfirmationForm: {
    gameId: null,
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
    },
    editGame(state, action) {
      // Редактирование уже существующей игры
      const newDataOfGame = action.payload;
      if (newDataOfGame.cover.length === 0) {
        newDataOfGame.cover = "src/assets/img/dota.jpg";
      }

      const index = state.gameList.findIndex(
        (item) => item.id === newDataOfGame.id,
      );
      state.gameList[index] = {
        ...newDataOfGame,
        rating: Number(newDataOfGame.rating),
      };
    },
    deleteGameById(state, action) {
      // Удаление игры по её id
      const gameId = action.payload;
      const index = state.gameList.findIndex((item) => item.id === gameId);

      state.gameList.splice(index, 1);
    },
    openLibraryModal(state, action) {
      const { action: isActive, modalType, data } = action.payload;
      state.modal = { isActive, modalType };

      if (isActive) {
        if (modalType === "gameForm") {
          state.gameForm = {
            mode: data.mode,
            game: data.game,
          };
        } else if (modalType === "deleteConfirmationForm") {
          state.deleteConfirmationForm = { gameId: data };
        } else {
          throw new Error("Not correct modal type");
        }
      } else {
        throw new Error("Not correct value of isActive");
      }
    },
    closeLibraryModal(state) {
      state.modal = {
        isOpen: false,
        modalType: null,
      };

      state.gameForm = {
        mode: null,
        game: null,
      };

      state.deleteConfirmationForm = {
        gameId: null,
      };
    },
  },
});

export const {
  addNewGame,
  editGame,
  deleteGameById,
  openLibraryModal,
  closeLibraryModal,
} = librarySlice.actions;
export default librarySlice.reducer;
