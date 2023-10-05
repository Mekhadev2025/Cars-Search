import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./components/Home/Home"
function App() {
  return (
    <>
      <BrowserRouter>
       <SearchBar/>
        <Routes>
         
          <Route path="/" element={<Home/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
