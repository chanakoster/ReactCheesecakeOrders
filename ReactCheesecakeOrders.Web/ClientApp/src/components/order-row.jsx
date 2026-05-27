import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

function OrderRow({ order }) {
    return (
        <tr key={order.id}>
            <td>
                <Link to={`/orderdetails/${order.id}`}>{order.name}-<br />{order.email}</Link>
            </td>
            <td>{order.flavor}</td>
            <td>{order.toppings}</td>
            <td>{order.specialRequests}</td>
            <td>{order.quantity}</td>
            <td>{dayjs(order.deliveryDate).format("MM/DD/YYYY")}</td>
            <td>${order.total.toFixed(2)}</td>
        </tr>
    )
}

export default OrderRow;