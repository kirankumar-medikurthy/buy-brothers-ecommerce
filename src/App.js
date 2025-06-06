import "./App.css";
import NavBar from "./components/NavBar";
import CategoryNavBar from "./components/CategoryNavBar";
import Footer from "./components/Footer";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CategoryNavBar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
