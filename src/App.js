import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage/Loginin";
import MainPage from "./pages/mainPage/MainPage";
function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/main" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;