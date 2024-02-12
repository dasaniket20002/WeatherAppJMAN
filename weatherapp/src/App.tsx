import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import 'primeicons/primeicons.css';
import Nav from './components/Nav';

function App() {
    return (
        <div className="App bg-gradient">
            <div className='h-screen p-14'>
                <h1 className='w-screen h-screen absolute bottom-0 left-0 font-bold text-[50rem] text-fade-txt overflow-hidden'>WEATHER</h1>
                <div className='h-full w-full grid grid-rows-5 rounded bg-card-transp-white backdrop-blur-md shadow-sm'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Nav />}>
                                <Route index path="/" element={<HomePage />} />
                                <Route path="register" element={<RegisterPage />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}
 
export default App;