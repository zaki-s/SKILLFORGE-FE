import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Login  from  './RegisterForm';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Login />
            <Footer />
        
    </React.StrictMode>
);
