import HomePage from "./components/homepage";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/movieDetails";
import Header from "./components/header";
import Favorite from "./components/favoritePage";
import SearchPage from "./components/searchComponent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/search/:value" element={<SearchPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
