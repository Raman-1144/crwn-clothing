import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <cartItem key={cartItem.id} item={CartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{CartItems}}) => ({
    CartItems
})
export default connect(mapStateToProps)(CartDropdown);