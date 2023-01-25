
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footballmain from './component/footballmain';
import Homemain from './component/homemain';
import Panchayathlogi from './component/panchayathlink';

import Footballclub from './component/footballclublink';
import Sample from './component/sample';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Footballmain/>}/>
      <Route path='/home' element={<Homemain/>}/>
      <Route path='/panchayath/*' element={<Panchayathlogi/>}/>
      <Route path='/footballclub/*'element={<Footballclub/>}/>
      <Route path='/*' element={<Sample/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
