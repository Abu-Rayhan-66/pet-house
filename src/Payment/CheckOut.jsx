import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import useAxiosPublic from "../hooks/useAxiosPublic";
// import { AuthContext } from "../Provider/AuthProvider";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";



const CheckOut = () => {
    const [donation, setDonation] = useState('')
    console.log(donation)


    const stripe = useStripe()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('') 
    const [error, setError] = useState('')
    const elements = useElements()
    
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)

    useEffect(() =>{
        axiosPublic.post('/create-payment-intent',{price:donation})
        .then(res =>{
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
      },[axiosPublic, donation])


    const handleSubmit = async(event) =>{
        event.preventDefault()

        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);
          
          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
          })
          if(error){
            console.log('payment error',error)
            setError(error.message)
          }
          else{
            console.log('payment method', paymentMethod)
            setError('')
          }
          // confirm payment
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
              card: card,
              billing_details:{
                  email:user?.email || 'anonymous',
                  name:user?.displayName || 'anonymous'
              }
            }
          })
          if(confirmError){
            console.log('confirm error')
          }
          else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
              console.log('transaction id', paymentIntent.id)
              setTransactionId(paymentIntent.id)

              // save the payment info to database
              const payment = {
                email: user.email,
                price:donation,
                transactionId:paymentIntent.id,
                date: new Date(),
                status:'pending'
              }
             const res = await axiosPublic.post('/donations',payment)
              console.log('payment saved', res.data)
            }
          }
    }
    return (
        <form onSubmit={handleSubmit}>
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      <input onBlur={(e) =>setDonation(e.target.value)} type="number" name="payment" />
      <button className="btn btn-secondary btn-sm my-3" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-700">{error}</p>
      {transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckOut;