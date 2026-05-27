import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import ViewOrders from './Pages/ViewOrdersPage';
import OrderForm from './Pages/OrderPage';


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<OrderForm />} />
                <Route path='/vieworders' element={<ViewOrders />} />
            </Routes>
        </Layout>
    );
}

export default App;