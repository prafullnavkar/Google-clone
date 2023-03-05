import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "./pages/Email";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
