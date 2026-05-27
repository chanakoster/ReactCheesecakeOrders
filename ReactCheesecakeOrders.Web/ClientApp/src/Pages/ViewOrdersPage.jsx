import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderRow from '../components/order-row';
import axios from 'axios';
import React from 'react';

function ViewOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrders = async () => {
            const { data } = await axios.get('/api/cheesecake/getallorders');
            setOrders(data);
            console.log(data);
        };
        loadOrders();
    }, [])

    return (
        <div className="app-container">
            <table className="table table-striped table-bordered table-hover text-center">
                <thead>
                    <tr>
                        <th>Name/Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(o => <OrderRow
                        key={o.id}
                        order={o} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ViewOrders