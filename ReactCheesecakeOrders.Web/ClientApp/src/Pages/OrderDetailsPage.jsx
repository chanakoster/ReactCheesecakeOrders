import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const OrderDetails = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {
        const getOrder = async () => {
            const { data } = await axios.get(`/api/cheesecake/getorder?id=${orderId}`);
            setOrder(data);
        }
        getOrder();
    }, [])


    if (!order) {
        return <h1>Loading...</h1>;
    }

    return (
        < div className="container mt-5" >
            <div className=" col-md-5 center card">
                <div className="card-body">
                    <h1>Order Details</h1>
                    <h5 className="card-title">{order.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{order.email}</h6>
                    <p>{order.flavor}</p>
                    <p>{order.toppings}</p>
                    <p>{order.specialRequests}</p>
                    <p>{order.quantity}</p>
                    <p>{dayjs(order.deliveryDate).format("MM/DD/YYYY")}</p>
                    <p>${order.total}</p>
                    <Link to="/vieworders">
                        <button className="btn btn-primary mb-3" >Back to Orders</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default OrderDetails;