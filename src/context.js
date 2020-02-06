import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer


class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct,
        cart: storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }
    
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        });
    };

    getItemById = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItemById(id);
        this.setState(() => {
            return {detailProduct: product};
        });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItemById(id));
        const product = tempProducts[index];
        product.inCart = true;
        const count = product.count += 1;
        const price = product.price;
        product.total = price * count;

        this.setState(
            () => {
                return { 
                    products: tempProducts, cart: [...this.state.cart, product] 
                };
            }, 
            () => {
                console.log(this.state)
            }
        );
    };

    openModal = (id) => {
        const product = this.getItemById(id);
        this.setState(
            () => {
                return {
                    modalProduct: product,
                    modalOpen: true
                };
            },
            () => {
                console.log(this.state);
            }
        );
    };

    closeModal = () => {
        this.setState(
            () => {
                return {
                    modalOpen: false
                }
            }
        );
    };

    increment = (id) => {
        console.log('this is increment method');
    };

    decrement = (id) => {
        console.log('this is decrement method');
    };

    removeFromCart = (id) => {
        console.log('removed from cart');
    };

    clearCart = () => {
        console.log('cart cleared');
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeFromCart: this.removeFromCart,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer};
