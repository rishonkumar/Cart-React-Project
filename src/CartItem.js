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
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        //alternative use arrow functions it will bind instance of class
    }
    increaseQuantity = () =>{
        // this.state.qty += 1;
        // console.log('this.test' , this.state);
        // setstate form 1 by objects
        // this.setState({
        //     qty: this.state.qty + 1 
        // })
        // Set form 2 by passing function
        //if prev state required use this state
        this.setState((prevState) => {
            return{
                qty : prevState.qty + 1
            }
        })
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
                        <img
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1648362557~hmac=95e733ede12e85975b65e8fdca651201"
                            //this will increase the quantity use event listenier
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1648362557~hmac=95e733ede12e85975b65e8fdca651201"
                        />
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