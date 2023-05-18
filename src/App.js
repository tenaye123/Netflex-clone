import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SharedLayout from "./Collection/SharedLayout";
import Tvshow from "./Collection/Tvshow";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/tvshows" element={<Tvshow />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
