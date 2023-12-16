import React, { useState } from 'react';

const InvoiceForm = ({ onAddItem }) => {
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
            [name]: parseFloat(value),
        });
    };

    const handleAddItem = () => {
        const newItem = {
            id: Date.now(),
            ...formData,
            totalAmount: calculateItemTotal(formData),
        };

        onAddItem(newItem);
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

    return (
        <form className="input-form">
            {/* ... (previous form inputs) */}
            <button type="button" onClick={handleAddItem}>Add Item</button>
        </form>
    );
};

export default InvoiceForm;



