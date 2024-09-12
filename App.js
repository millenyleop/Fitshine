import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home'; // Correto se estiver diretamente em src
import Nutricionista from './Nutricionista'; // Certifique-se de que o nome está correto
import Personais from './Personais'; // Certifique-se de que o arquivo Personais.js está presente
import Receitas from './Receitas';
import SOS from './SOS';
import Descontos from './Descontos';
import Suplementação from './Suplementação';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Página inicial */}
          <Route path="personais" element={<Personais />} />
          <Route path="nutricionista" element={<Nutricionista />} />
          <Route path="receitas" element={<Receitas />}/>
          <Route path="sos" element={<SOS />}/>
          <Route path="descontos" element={<Descontos />}/>
          <Route path="suplementação" element={<Suplementação />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
