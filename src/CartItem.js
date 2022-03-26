import React from "react";

class CartItem extends React.Component{
    // State
    constructor (){
        super(); // it will call constructor of component class
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: ''
        }
    }
    render(){
        const{price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color : '#777'} }>Rs {price}</div>
                    <div style={ {color : '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1648301454~hmac=fa2068d77bef8176a3f368f9d0d35757"/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1648301481~hmac=b50cd6ccc8673f0eaf6acb5edc7543e8"/>
                    </div>
                </div>
            </div>
        );
    }
}
// To style in react

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;