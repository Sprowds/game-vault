import "./App.css";
import "./reset.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/library" replace />} />
          <Route path="library" element={<LibraryPage />} />
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
