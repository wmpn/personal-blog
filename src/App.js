import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleListPage from "./pages/ArticleListPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:articleId" element={<Article />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
