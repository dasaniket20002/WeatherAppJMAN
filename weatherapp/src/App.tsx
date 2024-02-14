import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import 'primeicons/primeicons.css';
import RoutesContainer from './components/RoutesContainer';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
    return (
        <div className="App bg-gradient">
            <div className='min-h-screen p-14'>

                <div className='w-screen h-screen fixed top-0 left-0 overflow-hidden'>
                    <h1 className='absolute top-5 right-0 font-bold text-[15rem] text-fade-col'>Sunny?</h1>
                    <h1 className='absolute -top-5 -left-5 font-bold text-[10rem] text-fade-col'>Winds!</h1>
                    <h1 className='absolute rotate-90 top-0 left-[32rem] right-50 font-bold text-[10rem] text-fade-col'>Breeze</h1>
                    <h1 className='absolute -bottom-80 -left-48 font-bold text-[50rem] text-fade-col'>WEATHER</h1>
                </div>

                <div className='relative w-full auto-rows-min rounded bg-card-transp-white backdrop-blur-md shadow-lg'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<RoutesContainer />}>
                                <Route index path="/" element={<HomePage />} />
                                <Route path="register" element={<RegisterPage />} />
                                <Route path='weather' element={<WeatherDisplay />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>


    );
}

export default App;