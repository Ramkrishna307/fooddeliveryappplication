import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
   <>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<LogIn/>}/>
   </Routes>
   

   </>
  );
}

export default App;
