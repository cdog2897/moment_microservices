
import Stripe from "stripe";

const stripe = new Stripe('KEY');

export const postPaymentIntent = async (req, res) => {

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099,
            currency: 'us'
        });

        res.json({
            paymentIntent: paymentIntent.client_secret,
            publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
        })
    } catch (error) {
        console.error('Error creating payment sheet:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}