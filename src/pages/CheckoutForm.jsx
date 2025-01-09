import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = () => {
   const stripe = useStripe()
   const elements = useElements();
   const handleSubmit = async (e) => {
      e.preventDefault();
      if(!stripe || !elements) {
         return
      }
      const result = await stripe.confirmPayment({
         elements,
         confirmParams: {
            return_url:"https://example.com/order/123/complete"
         }
      })
      if(result.error) {
         console.log(result.error.message);
      }else{
         //h
      }
   }

   return (
      <form className='my-12' onSubmit={handleSubmit}>
         <PaymentElement></PaymentElement>
         <button className='btn'>Submit de</button>
      </form>
   );
};

export default CheckoutForm;