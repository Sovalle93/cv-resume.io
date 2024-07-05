import Navbar from './components/Navbar';
import Spanish from './pages/Spanish';
import English from './pages/English';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/español" element={<Spanish />} />
        <Route path="/english" element={<English />} />
        <Route component={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
