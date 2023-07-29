import Home from "./pages/Home/index.js";
import Header from "./components/header/header.js";
import * as React from "react";
import AddExpense from "./pages/add-expenses/index.js"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/footer/index.js";



function App() {
  return (
    <BrowserRouter>
      <div>
        < Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expenses" element={<AddExpense />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
