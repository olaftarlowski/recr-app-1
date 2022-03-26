import FullData from "./components/FullData/FullData";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

const AppWrapper = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 1.8em;
  text-align: center;
  color: white;
`;

function App() {
  return (
    <main>
      <AppWrapper>
        <Routes>
          <Route path="/directories" exact element={<FullData />}></Route>
          <Route
            path="/directories/:directoryCode"
            element={<FullData></FullData>}
          ></Route>
          <Route path="*" element={<Navigate to="/directories" />}></Route>
        </Routes>
      </AppWrapper>
    </main>
  );
}

export default App;
