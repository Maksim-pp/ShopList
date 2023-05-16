import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import Navigation from './Components/Navigation/Navigation';
import style from './App.module.css';

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path='/' element={<ProductsPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </div>
    )
}

export default App;
