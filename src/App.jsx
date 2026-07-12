import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import "./reset.css";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content-wrapper">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
