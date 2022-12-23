import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const run = () => {
    const container = document.querySelector('#root');
    const root = createRoot(container);
    const app = <App />;

    root.render(app);
};

run();
