import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Сustomers from './pages/Customers/Customers'
import Toifalar from './pages/Toifalar/Toifalar'
import Mahsulotlar from './pages/Mahsulotlar/Mahsulotlar'
import Texnologiyalar from './pages/Texnologiyalar/Texnologiyalar'
import Manzil from './pages/Manzil/Manzil';
import Buyurtmalar from './pages/Buyurtmalar/Buyurtmalar';
import HomeIkki from './pages/HomeIkki/HomeIkki';

function App() {
  return (
    <div className="App">
     <Routes>
          <Route path='/' element={<HomeIkki/>}/>
          <Route path='/admin' element={<Admin/>}>
          <Route path='' element={<Buyurtmalar/>}/>
          <Route path='customers' element={<Сustomers/>}/>
          <Route path='toifalar' element={<Toifalar/>}/>
          <Route path='mahsulotlar' element={<Mahsulotlar/>}/>
          <Route path='texnologiyalar' element={<Texnologiyalar/>}/>
          <Route path='manzil' element={<Manzil/>}/>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
