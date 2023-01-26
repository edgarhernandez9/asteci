import logo from './logo.svg';
import './App.css';
import { Rutas } from './components/Rutas';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataApi } from './store/reducer';

function App() {

  return (
    <div className="App">
      <Rutas />
    </div>
  );
}

export default App;
