import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import InvoiceForm from './InvoiceForm';

const App = () => {
    const [invoiceItems, setInvoiceItems] = useState([]);
    const locate = useNavigate()

    const [formData, setFormData] = useState({
        quantity: 0,
        costPrice: 0,
        margin: 0,
        discount: 0,
        tax: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: parseFloat(value), // Parse input values as numbers
        });
    };

    const handleAddItem = () => {
        const newItem = {
            id: Date.now(),
            ...formData,
            totalAmount: calculateItemTotal(formData),
        };

        setInvoiceItems([...invoiceItems, newItem]);
        setFormData({
            quantity: 0,
            costPrice: 0,
            margin: 0,
            discount: 0,
            tax: 0,
        });
    };

    const calculateItemTotal = (item) => {
        const totalCost = item.quantity * item.costPrice;
        const totalWithMargin = totalCost + (totalCost * (item.margin / 100));
        const discountedTotal = totalWithMargin - (totalWithMargin * (item.discount / 100));
        return discountedTotal + (discountedTotal * (item.tax / 100));
    };

    const calculateInvoice = () => {
        const totalAmount = invoiceItems.reduce((total, item) => total + item.totalAmount, 0);
        return totalAmount.toFixed(2);
    };
    const navigateToHomepage = () => {
        locate("/");
    };

    return (
        <div>
            <h1>Invoice Calculator</h1>

            <form>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} required /><br />

                <label htmlFor="costPrice">Cost Price:</label>
                <input type="number" id="costPrice" name="costPrice" value={formData.costPrice} onChange={handleInputChange} required /><br />

                <label htmlFor="margin">Margin (%):</label>
                <input type="number" id="margin" name="margin" value={formData.margin} onChange={handleInputChange} required /><br />

                <label htmlFor="discount">Discount (%):</label>
                <input type="number" id="discount" name="discount" value={formData.discount} onChange={handleInputChange} required /><br />

                <label htmlFor="tax">Tax (%):</label>
                <input type="number" id="tax" name="tax" value={formData.tax} onChange={handleInputChange} required /><br />

                <button type="button" onClick={handleAddItem}>Add Item</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Cost Price</th>
                        <th>Margin (%)</th>
                        <th>Discount (%)</th>
                        <th>Tax (%)</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.quantity}</td>
                            <td>{item.costPrice}</td>
                            <td>{item.margin}</td>
                            <td>{item.discount}</td>
                            <td>{item.tax}</td>
                            <td>₹{item.totalAmount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Total Sales Price: ₹{calculateInvoice()}</h2>
        </div>
    );
};

export default App;




