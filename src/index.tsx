
import ReactDOM from 'react-dom/client';

import App from './App';
import 'antd/dist/reset.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
//react router hata alirsin dikka tetmesse type kendin yuklueyeceksin
//


const store =createStore(rootReducer,applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<Provider store={store}>
  
  <App />
 
 

</Provider>
 

);

