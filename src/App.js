import "./App.css";
import FullData from "./components/FullData/FullData";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/directories" exact element={<FullData />}></Route>
          <Route
            path="/directories/:directoryCode"
            element={<FullData></FullData>}
          ></Route>
          <Route path="*" element={<Navigate to="/directories" />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
