import React from "react";

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style={ {color : '#777'} }>Rs 99</div>
                    <div style={ {color : '#777'} }>Qty : 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src=""/>
                        <img alt="decrease" className="action-icons" src=""/>
                        <img alt="delete" className="action-icons" src=""/>
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