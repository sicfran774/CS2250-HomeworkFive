import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreaturesNonFood from './component/CreaturesNonFood';
import CreaturesFood from './component/CreaturesFood';
import Monsters from './component/Monsters';
import Equipment from './component/Equipment';
import Materials from './component/Materials';
import Treasure from './component/Treasure';
import Layout from './component/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Monsters />}/>
          <Route path="creatures/">
            <Route path="food" element={<CreaturesFood />} />
            <Route path="non_food" element={<CreaturesNonFood />} />
          </Route>
          <Route path="equipment" element={<Equipment/>} />
          <Route path="materials" element={<Materials/>} />
          <Route path="treasure" element={<Treasure/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
