import ReactDOM from 'react-dom/client';
import { Provider } from './Provaider';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css'
import './scss/global.scss'

<link href="https://fonts.googleapis.com/css?family=Outfit:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

   <Provider>

      <BrowserRouter>
      
          <App />
     
      </BrowserRouter>

    </Provider>
);


