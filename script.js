let items = [];

function addItem() {
    const itemName = document.getElementById("item").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    if (itemName && quantity > 0 && price > 0) {
        const total = quantity * price;
        items.push({ itemName, quantity, price, total });
        updateTable();
        clearInputs();
    } else {
        alert("Please enter valid item details.");
    }
}

function clearInputs() {
    document.getElementById("item").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}

function updateTable() {
    const tableBody = document.getElementById("invoiceTable");
    tableBody.innerHTML = "";

    let subtotal = 0;
    items.forEach((item, index) => {
        subtotal += item.total;
        const row = `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.quantity}</td>
                <td>£${item.price.toFixed(2)}</td>
                <td>£${item.total.toFixed(2)}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });

    const tax = subtotal * 0.05;
    const grandTotal = subtotal + tax;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = grandTotal.toFixed(2);

::contentReference[oaicite:0]{index=0}
 
