import {Route, Routes} from "react-router-dom";
import SignIn from "./components/Login/Supplier/SignIn";
import SignUp from "./components/Login/Supplier/SignUp";

function App() {
  return (
      <>
          <Routes>
              <Route path={"login"} element={<SignIn/>}></Route>
              <Route path={"register"} element={<SignUp/>}></Route>
          </Routes>
      </>
  );
}

export default App;
