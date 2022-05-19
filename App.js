import Navbar from "./components/Navbar";
import Article from "./components/Article";
import "./styles.css";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <div className="container">
        <Article />
      </div>
    </div>
  );
}

export default App;