import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsuariosList from './usuariosList';
import ChamadosList from './chamadosList';

const App = () => (
  <Router>
    <Routes>
      <Route path="/usuarios" element={<UsuariosList />} />
      <Route path="/chamados" element={<ChamadosList />} />
    </Routes>
  </Router>
);

const root = (ReactDOM as any).createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;