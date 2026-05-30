import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./Login";
import Profile from "./Profile";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 