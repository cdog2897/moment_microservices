
// import Stripe from "stripe";

// const stripe = new Stripe('pk_test_51Kv9OAJHkFGBiS12hWn7RCQA1s8SnNTnfTirggYAvlQmYqYQMXizBIKE4KVliNZor8sz9EmIgkDba948MwKgDORS00zU6OmZFA');

export const postPaymentIntent = async (req, res) => {

    try {
        // const paymentIntent = await stripe.paymentIntents.create({
        //     amount: 1099,
        //     currency: 'usd'
        // });

        res.json({
            // paymentIntent: paymentIntent.client_secret
            "caleb wolin" : "rocks"
        })
    } catch (error) {
        req.log.error("Error creating payment intent: ", error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
}