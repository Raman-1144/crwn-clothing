import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IEAS3CZ1Vq8TuqzpUhxy7DoFDE8ieekWUfKKJSehK1ZQrqyDMII5ZI5Vgbe4y491qWkycYCDUnLMRVJ76cPbfDh00PG2L8Das';
const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;