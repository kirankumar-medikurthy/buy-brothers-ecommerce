import "./App.css";
import NavBar from "./components/NavBar";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
