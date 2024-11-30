
import axios from 'axios';


const apiKey = "test_c35e5cf8-1970-4e3b-b4f2-d00f29e35bf4";
const url = "https://api.sandbox.prodigi.com/v4.0/Orders";

export const submitOrder = async (req, res) => {

    const { shipping } = req.body;

    const payload = {
        "shippingMethod": "Budget",
        "recipient": {
            "address": {
                "line1": shipping.address.line1,
                ...(shipping.address.line2 ? { "line2": shipping.address.line2 } : {}),
                "postalOrZipCode": shipping.address.postal_code,
                "countryCode": shipping.address.country,
                "townOrCity": shipping.address.city,
                "stateOrCounty": shipping.address.state
            },
            "name": shipping.name,
            ...(shipping.phone ? { "phoneNumber": shipping.phone } : {})
        },
        "items": [
            {
                "sku": "GLOBAL-PHO-4x6",
                "copies": 1,
                "sizing": "fillPrintArea",
                "attributes" : {
                    "finish" : "gloss"
                },
                "assets": [
                    {
                        "printArea": "default",
                        "url": "https://firebasestorage.googleapis.com:443/v0/b/moment-3c911.appspot.com/o/orders%2FC1F689D3-6E4C-40B7-B1F8-4F609F9F3F3E.jpeg?alt=media&token=2c97ad3a-d938-4c95-b149-2b074b07cc33"
                    }
                ]
            },
            {
                "sku": "GLOBAL-PHO-4x6",
                "copies": 1,
                "sizing": "fillPrintArea",
                "attributes" : {
                    "finish" : "gloss"
                },
                "assets": [
                    {
                        "printArea": "default",
                        "url": "https://firebasestorage.googleapis.com:443/v0/b/moment-3c911.appspot.com/o/orders%2FC1321580-615C-4443-A6DB-29C98CA41FF3.jpeg?alt=media&token=f8ad25d6-9c8e-4b14-b55c-31e8fc5a0ea1"
                    }
                ]
            },
        ]
    }

    const headers = {
        'Content-Type' : 'application/json',
        'X-API-Key' : apiKey
    };


    req.log.info(payload)


    try {
        const response = await axios.post(url, payload, {headers});
        req.log.info(`Response received from Prodigi: ${response.data}`)
        res.status(200).json(response.data)
    } catch (error) {
        req.log.error(`An error occurred while sending Order request: ${error}`)
        res.status(500).json({"An error occured" : error.message})
    }
    



    

}