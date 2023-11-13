import Navbar from "./components/Navbar/Navbar";
import Intro from"./components/intro/intro"
import Skills from'./components/skills/skills';
function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
