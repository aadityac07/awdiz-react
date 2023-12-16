import React from 'react';

const InvoiceTable = ({ items, onRemoveItem }) => {
    return (
        <table className="invoice-table">
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Cost Price</th>
                    <th>Margin (%)</th>
                    <th>Discount (%)</th>
                    <th>Tax (%)</th>
                    <th>Total Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.quantity}</td>
                        <td>{item.costPrice}</td>
                        <td>{item.margin}</td>
                        <td>{item.discount}</td>
                        <td>{item.tax}</td>
                        <td>₹{item.totalAmount.toFixed(2)}</td>
                        <td>
                            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default InvoiceTable;


