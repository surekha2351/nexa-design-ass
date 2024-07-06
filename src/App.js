import Navbar from "./components/Navbar/navbar";
import "./App.css";
import Home from "./components/Home/home";

import Process from "./components/Process/Process";
import Showcase from "./components/Showcase/Showcase";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Home className="home-sec"/>
      <Process/>
      <Showcase/>
      <Footer/>
      </div>
    
      </>
  );
}

export default App;
