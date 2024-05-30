import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Panduan from './pages/Panduan';
import TentangKami from './pages/TentangKami';
import Pendidikan from './pages/Pendidikan';
import Kesehatan from './pages/Kesehatan';
import './scss/global.scss';
import './scss/beranda.scss';
// import './scss/panduan.scss';
import './scss/pendidikan.scss';
import './scss/kesehatan.scss';
// import './scss/tentang_kami.scss';
import StandarPenyusunan from './pages/StandarPenyusunan';
import './scss/StandarPenyusunan.scss';
import './scss/panduan.scss'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Beranda/>} />
          {/* {/* <Route path="blogs" element={} /> */}
          <Route path="/pendidikan" element={<Pendidikan/>} />
          <Route path="/kesehatan" element={<Kesehatan/>} />
          <Route path="/panduan" element={<Panduan/>} /> 
          <Route path="/tentang-kami" element={<TentangKami/>} />
          <Route path="/standar-penyusunan" element={<StandarPenyusunan/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
