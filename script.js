let items = [];

function addItem() {
    let itemName = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    if (itemName && quantity > 0 && price > 0) {
        let total = quantity * price;
        items.push({ itemName, quantity, price, total });

        updateTable();
    }
}

function updateTable() {
    let tableBody = document.getElementById("invoiceTable");
    tableBody.innerHTML = "";

    let subtotal = 0;
    items.forEach((item, index) => {
        subtotal += item.total;
        tableBody.innerHTML += `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.quantity}</td>
                <td>£${item.price}</td>
                <td>£${item.total.toFixed(2)}</td>
                <td><button onclick="removeItem(${index})">X</button></td>
            </tr>
        `;
    });

    let tax = subtotal * 0.05;
    let grandTotal = subtotal + tax;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = grandTotal.toFixed(2);
}

function removeItem(index) {
    items.splice(index, 1);
    updateTable();
}

function generatePDF() {
    let invoiceHTML = document.querySelector(".container").innerHTML;
    let newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write("<html><head><title>Invoice</title></head><body>" + invoiceHTML + "</body></html>");
    newWindow.document.close();
    newWindow.print();
}
