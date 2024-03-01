import Razorpay from "razorpay";
import PaymentModel from "../models/PaymentModel.js";
import crypto from 'crypto';

export const createOrder = async (req, res) => {
    try {

        const createPayment = await PaymentModel.create({ amount: req.body.amount * 100, currency: "INR", userId: req.id });

        const instance = new Razorpay({
            key_id: process.env.Razyor_Key_Id,
            key_secret: process.env.Razyor_Secret_Key
        });
        const options = {
            amount: createPayment.amount,
            currency: "INR",
            receipt: createPayment._id
        };
        const order = await instance.orders.create(options);

        createPayment.orderId = order.id;
        await createPayment.save();

        return res.json(order);


    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}



export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const payment = await PaymentModel.findOne({ orderId: razorpay_order_id });
        if (!payment) {
            return res.status(400).json({ message: "Payment not found" });
        }
        const instance = new Razorpay({
            key_id: process.env.Razyor_Key_Id,
            key_secret: process.env.Razyor_Secret_Key
        });
        const options = {
            razorpay_order_id: razorpay_order_id,
            razorpay_payment_id: razorpay_payment_id,
            razorpay_signature: razorpay_signature
        };

        const body = `${razorpay_order_id}|${razorpay_payment_id}`;

        const expectedSignature = crypto.createHmac('sha256', process.env.Razyor_Secret_Key)
            .update(body)
            .digest('hex');
        if (expectedSignature === razorpay_signature) {
            payment.paymentId = razorpay_payment_id;
            payment.signature = razorpay_signature;
            payment.status = "success";
            await payment.save();
            return res.status(200).json({ message: "Payment successfully verified" });
        } else {
            payment.status = "failed";
            await payment.save();
            return res.status(400).json({ message: "Payment verification failed" });
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}

export const getKey = async (req, res) => {
    try {
        return res.status(200).json({ key_id: process.env.Razyor_Key_Id });

    }
    catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ message: "Something went wrong", error: error.message });

    }



}