import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="filler" />
      <Footer />
    </div>
  );
}

export default App;
