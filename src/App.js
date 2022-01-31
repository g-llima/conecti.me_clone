import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Portfolio from "./components/Portfolio";
import TimeHab from "./components/TimeHab";
import Lema from "./components/Lema";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Servicos />
      <Portfolio />
      <TimeHab />
      <Lema />
    </div>
  );
}

export default App;
