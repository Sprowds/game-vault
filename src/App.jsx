import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import "./reset.css";
import { useGamesLibrary } from "./hooks/useGamesLibrary";

function App() {
  const { gameList, gameFormActive, gameFormToogle, deleteGameById } =
    useGamesLibrary();

  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content-wrapper">
            <Sidebar />
            <Main
              gameList={gameList}
              gameFormActive={gameFormActive}
              gameFormToogle={gameFormToogle}
              deleteGameById={deleteGameById}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
