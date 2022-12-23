import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Root from './Root';
import Aiman from './Aiman';
import Sama from './Sama';
import Arya from './Arya';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: 'aiman',
        element: <Aiman />,
    },
    {
        path: 'arya',
        element: <Arya />,
    },
    {
        path: 'sama',
        element: <Sama />,
    },
]);

const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={routers}></RouterProvider>
        </React.StrictMode>
    );
};

export default App;
