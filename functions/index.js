const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const { setGlobalOptions } = require("firebase-functions/v2");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
// Initialize dotenv (for .env file)
const app = express();

// setGlobalOptions({maxInstances: 10}); 


app.use(cors({ origin: true })); // Enable CORS for all requests

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Success!" });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  if (total > 0) {
    const paymentIntents = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntents);
    res.status(200).json(
        { clientSecret: paymentIntents.client_secret },
    );
  } else {
    res.status(403).json({ message: "total must be greater than 0" });
  }
});

exports.api = onRequest(app);
