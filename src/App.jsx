
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';
import PathNotFound from './Pages/PathNotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';




function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}  />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='*' element={<PathNotFound/>} />
      </Routes>
     
      <Footer/>
    </>
  )
}

export default App
