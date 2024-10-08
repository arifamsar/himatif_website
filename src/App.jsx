import NavBar from "./components/NavBar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import DetailArticle from "./pages/DetailArticle";
import Admin from "./pages/Admin";
import Gallery from "./pages/Gallery";
import { createContext, useEffect, useState } from "react";
import ScrollToTop from "./components/scrollToTop";

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  const login = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      login(user);
    }
  }, []);

  // Check if the current route is login or admin
  const isLoginOrAdmin = location.pathname === "/login" || location.pathname === "/signup" || (location.pathname === "/admin" && !isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, currentUser }}>
      <ScrollToTop />
      {!isLoginOrAdmin && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<DetailArticle />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/admin" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
        <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {!isLoginOrAdmin && <Footer />}
    </AuthContext.Provider>
  );
}

export default App;
