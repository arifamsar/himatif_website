import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import DetailArticle from "./pages/DetailArticle";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<DetailArticle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
