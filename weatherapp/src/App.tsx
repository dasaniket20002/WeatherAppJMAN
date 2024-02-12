import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./components/RegisterPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App min-h-screen">
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
