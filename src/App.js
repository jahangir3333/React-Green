import './App.css';
import Home from './COMPONENTS/Home';
import {BrowserRouter, Routes, Route} from 'react-router'
import About from './COMPONENTS/About';
import Services from './COMPONENTS/Services';
import Pages from './COMPONENTS/Pages';
import Blog from './COMPONENTS/Blog';
import Contact from './COMPONENTS/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/todo' element={<Services/>}/>
 <Route path='/Pages' element={<Pages/>}/>
 <Route path='/blog' element={<Blog/>}/>
 <Route path='/contact' element={<Contact/>}/>


      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
