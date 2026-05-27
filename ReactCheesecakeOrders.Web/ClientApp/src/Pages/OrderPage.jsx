import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { produce } from 'immer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

const flavors = ['Classic', 'Chocolate', 'Red Velvet', 'Brownie'];
const toppingChoices = ['Strawberries', 'Blueberries', 'Chocolate Chips', 'Whipped Cream'];

const OrderForm = () => {

    const navigate = useNavigate();

    const [order, setOrder] = useState({
        name: '',
        email: '',
        flavor: '',
        specialRequests: '',
        quantity: 0,
        deliveryDate: '',
    });

    const [toppingsList, setToppingsList] = useState([]);

    const onTextChange = e => {
        const nextState = produce(order, draft => {
            draft[e.target.name] = e.target.value;
            if (e.target.name === 'flavor' && order.quantity === 0) {
                draft.quantity = 1;
            }
        });

        setOrder(nextState);
    }

    const onSubmitClick = async () => {
        await axios.post('/api/cheesecake/submitorder', { ...order, total: total, toppings: toppings })
        navigate('/vieworders')
    }

    const onToppingsCheckboxChange = e => {
        const nextState = produce(toppingsList, draft => {
            if (toppingsList.includes(e.target.value)) {
                return draft.filter(t => t !== e.target.value);
            }
            else {
                draft.push(e.target.value);
            }
        });

        setToppingsList(nextState);
    }

    const toppings = toppingsList.join(', ');

    const total = order.quantity * 49.99 + toppingsList.length * 3.95;

    const { name, email, flavor, specialRequests, quantity, deliveryDate } = order;

    return (
        <div className="row" style={{ marginTop: '20px' }}>
            <h1 className="text-center">Cheesecake Factory Order Form</h1>
            <div className="col-md-6">
                <label>Name</label>
                <input type="text" onChange={onTextChange} value={name} name="name" className="form-control col-md-3" />
                <label>Email</label>
                <input type="email" onChange={onTextChange} value={email} name="email" className="form-control" />
                <label>Cheesecake Base Flavor ($49.99)</label>
                <select className="form-control" name="flavor" onChange={onTextChange} value={order.flavor}>
                    <option value="">Select a flavor</option>
                    {flavors.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
                <label>Toppings (each topping adds an additional $3.95)</label>
                <ul>
                    {toppingChoices.map(t =>
                        <li key={t}>
                            <input type="checkbox" checked={toppingsList.includes(t)} onChange={onToppingsCheckboxChange} value={t} />
                            <label>{t}</label>
                        </li>
                    )}
                </ul>
                <label>Special Requests</label>
                <textarea className="form-control" name="specialRequests" onChange={onTextChange} value={specialRequests} />
                <label>Quantity</label>
                <input type="number" name="quantity" onChange={onTextChange} value={quantity} className="form-control" />
                <label>Delivery Date</label>
                <input type="date" name="deliveryDate" onChange={onTextChange} value={deliveryDate} className="form-control" />
                <button className="btn btn-primary mt-3" disabled={!name || !email || !flavor || !quantity || !deliveryDate} onClick={onSubmitClick}>Submit</button>
            </div>
            <div className="col-md-4">
                <h3>Live Preview</h3>
                <div className="card">
                    <div className="card-body">
                        <span>Your Custom Cheesecake</span>
                        <p>Base: {flavor ? flavor : 'Choose...'}</p>
                        <p>Toppings: {toppingsList && toppings}</p>
                        <p>Special Requests: {specialRequests}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Delivery Date: {dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                        <p>Total: ${total}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OrderForm;