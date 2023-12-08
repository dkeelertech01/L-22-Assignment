function createInvoice()  {
const name = document.getElementById("name").value;
const steet = document.getElementById("street").value;
const city = document.getElementById ("city").value;

let price1=document.getElementById("price1").value;
let price2=document.getElementById("price2").value;

let subtotal = parseFloat(price1) + parseFloat(price2);
let tax = 0.07 * subtotal;
let total = tax + subtotal;
total = total.toFixed(2);

const startHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="invoice-style.css">
    <title>Customer Invoice</title>
</head>
<body>
    <header>
        <div class="logo">
            <img src="chocolate-logo.jpg" alt="Chocolate Logo">
        </div>
        <div class="invoice-text">
            <p>
            123 Main St.<br>
            St. Louis, MO 99955<br>
            (123) 456-7890<br>
            </p>
        </div>
    </header>
    <main>`;

    const table =`<table>
    <tr>
        <th colspan="3">Customer Information</th>
    </tr>
    <tr >
        <td colspan="3">${name}<br>
            ${street}<br>
            ${city}, [state] [zip]<br>
            [phone]
        </td>
    </tr>
    <tr>
        <th width="20%">Item</th>
        <th>Product</th>
        <th width="20%">Price</th>
    </tr>
    <tr>
        <td>Item 1</td>
        <td>[Item 1 Value]</td>
        <td>$ ${price1}</td>
    </tr>
    <tr>
        <td>Item 2</td>
        <td>[Item 2 Value]</td>
        <td>$ [Item 2 Price]</td>
    </tr>
    <tr>
        <td>Item 3</td>
        <td>[Item 3 Value]</td>
        <td>$ [Item 3 Price]</td>
    </tr>
    <tr>
        <td></td>
        <td>Subtotal</td>
        <td>$ [Subtotal]</td>
    </tr>
    <tr>
        <td></td>
        <td>Tax</td>
        <td>$ [Tax]</td>
    </tr>
    <tr>
        <td></td>
        <td>Total</td>
        <td>$ [Total]</td>
    </tr>
    </table>`;

    const endHTML =`</main>
    </body>
    </html>`;

    const newWindow = window.open("", "newWindow");
    newWindow.document.write(startHTML + TABLE + endHTML);







}