
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51Kv9OAJHkFGBiS125ZmqUZmj8TuAPDm8URrmSULIxCoFW12BpdNKSypCngfU0GswydsHzjoO0gImnoEOIDeqCqj400fbXPlttJ');

export const postPaymentIntent = async (req, res) => {

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099,
            currency: 'usd'
        })

        req.log.info("Received payment intent: ", paymentIntent.client_secret)

        res.json({
            paymentIntent: paymentIntent.client_secret,
            "publishable_key" : "pk_test_51Kv9OAJHkFGBiS12hWn7RCQA1s8SnNTnfTirggYAvlQmYqYQMXizBIKE4KVliNZor8sz9EmIgkDba948MwKgDORS00zU6OmZFA"
        })
    } catch (error) {
        req.log.error("Error creating payment intent: ", error.message)
        res.status(500).json({ error: 'Internal Server Error' });
      }
}