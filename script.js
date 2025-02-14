const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



const getSum = () => {

    const priceElems = document.querySelectorAll(".price");

    let total = 0;
    priceElems.forEach(price => {
        total += parseFloat(price.textContent);
    });

    let table = document.querySelector("table");
    let totalPriceRow = table.insertRow(-1);
    let totalPriceCell = totalPriceRow.insertCell(0);
    totalPriceCell.textContent = `Total Price: Rs ${total}`;
   
};

getSumBtn.addEventListener("click", getSum);

