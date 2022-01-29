import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Servicos />
      <Portfolio />
    </div>
  );
}

export default App;
