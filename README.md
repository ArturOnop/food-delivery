# Food delivery app

## Running the app.

Write this command in command prompt of project to install all needed libraries for front-end and back-end.

`npm i`

Then write this command in front-end and back-end to start the app.

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

Server will be on port 7777.

This app uses MongoDB Atlas.

## About app

### This application consists of 4 main modules:

1. Shop
2. Cart
3. History
4. Coupons

### Shop

In the Shop you can see available restaurants to delivery ordering.\
For example purposes I took McDonald`s and KFC.\
Ones you chose a restaurant you can add meals to your cart.\
I cannot take meals from different places.\
To enable choosing another restaurant go to Cart and delete previously chosen meals.

### Cart

In the Cart you can change the number of meals you want to order.\
To order please fill the form.\
You can add coupons from Coupons module.\
! Important ! The total price is calculated when the user interacts with form.\
Also, you can use map to see the locations.

### History

In the History module you can search for your order by Order id or just scroll and look through all your orders.

### Coupons

In the Coupons you can see all available coupons and copy by pressing the code of the needed coupon.

### P.S.

Chosen shop, current cart items and history of orders are stored in the localStorage.
