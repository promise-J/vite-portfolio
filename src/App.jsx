import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // your landing page
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Main app */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;