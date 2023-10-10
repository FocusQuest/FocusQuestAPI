
import { createRoot } from 'react-dom/client';
import App from './app'; // Importe o componente App a partir do arquivo app.js

const root = createRoot(document.getElementById('root'));

root.render(<App />); // Use <App /> ao invés de <app />
