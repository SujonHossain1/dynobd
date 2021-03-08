import jwtDecode from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "./assets/styles/slick.css";
import './assets/styles/style.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { LOGIN } from './store/actions/types';
import store from './store/store';

let token = localStorage.getItem('customer_auth_token');

if (token) {
    let decodeToken = jwtDecode(token)
    store.dispatch({
        type: LOGIN,
        payload: {
            customerToken: token,
            user: decodeToken,
            isAuth: true
        },
    })
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
