import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.tsx";
import AddCheese from "./components/AddCheese.tsx";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add" element={<AddCheese/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
