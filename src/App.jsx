import "./App.css";
import "./reset.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useCallback } from "react";
import Layout from "./components/Layout/Layout";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { useGamesLibrary } from "./hooks/useGamesLibrary";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const { gameList, gameFormActive, gameFormToogle, deleteGameById } =
    useGamesLibrary();

  const [modalWindowToggle, setModalWindowToggle] = useState({
    isActive: false,
    window: "",
  });
  const editModalWindowToggle = useCallback((isActive, window) => {
    setModalWindowToggle({ isActive, window });
  }, []);

  const [deleteConfirmationFormToggle, setDeleteConfirmationFormToggle] =
    useState({
      isActive: false,
      gameId: "",
    });
  const deleteConfirmationFormToggleHandler = (isActive, gameId) => {
    setDeleteConfirmationFormToggle({ isActive, gameId });
  };

  const libraryElement = (
    <LibraryPage
      gameList={gameList}
      editModalWindowToggle={editModalWindowToggle}
      gameFormToogle={gameFormToogle}
      deleteGameById={deleteGameById}
      deleteConfirmationFormToggle={deleteConfirmationFormToggle}
      deleteConfirmationFormToggleHandler={deleteConfirmationFormToggleHandler}
    />
  );

  const layoutElement = (
    <Layout
      modalWindowToggle={modalWindowToggle}
      editModalWindowToggle={editModalWindowToggle}
      gameFormActive={gameFormActive}
      gameFormToogle={gameFormToogle}
      deleteGameById={deleteGameById}
      deleteConfirmationFormToggle={deleteConfirmationFormToggle}
      deleteConfirmationFormToggleHandler={deleteConfirmationFormToggleHandler}
    />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={layoutElement}>
          <Route index element={<Navigate to="/library" replace />} />
          <Route path="library" element={libraryElement} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
