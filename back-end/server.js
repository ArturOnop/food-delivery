const express = require("express");
const server = express();
const PORT = process.env.PORT || 7777;
server.use(express.static(__dirname));
server.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
});

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

const mongoose = require("mongoose");
const url = "mongodb+srv://fooddeliveryadmin:gdJb6pGHItOeOQfs@fooddelivery.et7jv.mongodb.net/fooddelivery?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || url, {useNewUrlParser: true, useUnifiedTopology: true});

if (process.env.NODE_ENV === "production"){
    server.use(express.static("food-delivery/build"));
}

const Schema = mongoose.Schema;
const ShopSchema = new Schema({
    title: String,
    meals: [
        {
            id: String,
            img: String,
            title: String,
            price: Number
        }
    ]
});
const CouponSchema = new Schema({
    title: String,
    img: String,
    code: String,
    discount: String
});
const OrderSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    order: String,
    coupon: String,
    sum: Number,
    orderId: String
})

const ShopsModel = mongoose.model("Shops", ShopSchema);
const CouponsModel = mongoose.model("Coupons", CouponSchema);
const OrdersModel = mongoose.model("Orders", OrderSchema);

const cors = require("cors");
server.use(cors({origin: "*"}));

server.get("/shops", (req, res) => {
    ShopsModel.find({}).then((data) => res.json(data));
});

server.get("/coupons", (req, res) => {
    CouponsModel.find({}).then((data) => res.json(data));
});

server.get("/orders/:userEmail", (req, res) => {
    OrdersModel.find({email: req.params.userEmail}).then((data) => res.json(data));
});

server.post("/orders", (req, res) => {
    let newOrder = new OrdersModel(req.body);
    newOrder.save((err) => {
        if (err) console.log("Order push error");
    })
});

