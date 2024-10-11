import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./container/Home";
import Blog from "./container/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookDemoModal from "./components/BookDemoModal";
import { useGlobalContext } from "./contexts/GlobalContext";

function App() {
  const { showBookDemo, updateShowBookDemo } = useGlobalContext();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="blogs/*" element={<Blog />} />
      </Routes>
      <Footer />
      <BookDemoModal isOpen={showBookDemo} onOpenChange={updateShowBookDemo} />
    </div>
  );
}

export default App;
