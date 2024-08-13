import React from 'react';

export default class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products:[
                {id:1, product_name: "Product 1", price: 25.00, quantity: 1},
                {id:2, product_name: "Product 2", price: 10.50, quantity: 3},
                {id:3, product_name: "Product 3", price: 8.25, quantity: 1},
            ]
        }
    }

    calculateTotal = () => {
        return this.state.products.reduce((total,product) => {
            return total + product.price * product.quantity;
        }, 0);
    };

    render() {

        const totalAmount = this.calculateTotal();
        const formattedtotal = totalAmount.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL",
        });


        return (
            <div className='products'>
                {this.state.products.map((products) => (
                <div className='product'>
                    <div className='product_details'>
                        <h3>{products.product_name}</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <h3>{products.price}</h3>
                    </div>
                    <div className='product__quantity-container'>
                        <button className='soma'>+</button>
                        <p>{products.quantity}</p>
                        <button className='sub'>-</button>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

