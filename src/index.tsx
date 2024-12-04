import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/global.scss';
import { StoreProvider } from './app/providers/StoreProvider';
import { HomePage as App } from './pages/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // to avoid double rendering
  // <React.StrictMode>
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
