import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Portfolio from "./components/Portfolio";
import TimeHab from "./components/TimeHab";
import Lema from "./components/Lema";
import Clientes from "./components/Clientes";
import Contato from "./components/Contato";
import Mensagem from "./components/Mensagem";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <TimeHab />
      <Lema />
      <Clientes />
      <Contato />
      <Mensagem />
      <Footer />
    </div>
  );
}

export default App;
