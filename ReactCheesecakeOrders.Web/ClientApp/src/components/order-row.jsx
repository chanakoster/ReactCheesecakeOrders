import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderRow({ order }) {
    return (
        <tr key={order.id}>
            <td>{order.name}-<br />{order.email}</td>
            <td>{order.flavor}</td>
            <td>{order.toppings}</td>
            <td>{order.specialRequests}</td>
            <td>{order.quantity}</td>
            <td>{order.deliveryDate}</td>
            <td>{order.total}</td>
        </tr>
    )
}

export default OrderRow;