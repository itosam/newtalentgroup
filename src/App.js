
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Info from "./components/Info";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Info/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
