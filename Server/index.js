// const {setGlobalOptions} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/https");
// const logger = require("firebase-functions/logger");
const express = require("express")
const cors = require("cors")
const dotenv = require('dotenv');
dotenv.config()
const stripe = require("stripe")(process.env.SSTRIPE_KEY);

const app = express()
const PORT = process.env.PORT 
app.use(cors({origin:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).send("<h1>The server is running</h1>")
})

app.post('/payments/create',async (req,res)=>{
    const total = req.query.total;
    if(total > 0) {
        const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        });
        res.status(201).json(paymentIntent);
    } else {
        res.status(403).json({
            "message": "Total amount must be greater than zero"
        })
    }
    
    
    
})



app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);
})

// exports.api = onRequest(app);