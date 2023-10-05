import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <>
      <BrowserRouter>
       <SearchBar/>
        <Routes>
         
          <Route to="/"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
