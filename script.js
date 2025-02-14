const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
getSumBtn.id="ans";
document.body.appendChild(getSumBtn);

const getSum = () => {

    const prices = document.querySelectorAll(".price");
	
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
	    total += parseFloat(prices[i].textContent);
	}

    let table = document.querySelector("table");
    let totalPriceRow = table.insertRow(-1);
    let totalPriceCell = totalPriceRow.insertCell(0);
    totalPriceCell.textContent = `Total Price: Rs ${total}`;
	document.getElementById("ans").disabled = true;
};

getSumBtn.addEventListener("click", getSum);

