import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import DetailArticle from "./pages/DetailArticle";
import Admin from "./pages/Admin";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<DetailArticle />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
