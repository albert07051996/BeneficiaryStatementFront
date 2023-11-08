import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { Layout, ConfigProvider } from 'antd';
import geo from 'antd/es/locale/ka_GE';
import 'moment/locale/ka';

// import './web.config';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <Provider store={store}>
      <ConfigProvider locale={geo}  theme={{ hashed: false }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </>
);

reportWebVitals();
