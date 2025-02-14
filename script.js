const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
getSumBtn.id="ans";
document.body.appendChild(getSumBtn);

const getSum = () => {

    const priceElems = document.querySelectorAll(".price");
	let ansElem = document.querySelector("#ans");
    let total = 0;
    for (let i = 0; i < priceElems.length; i++) {
	    total += parseFloat(priceElems[i].textContent);
	}

    let table = document.querySelector("table");
    let totalPriceRow = table.insertRow(-1);
    let totalPriceCell = totalPriceRow.insertCell(0);
    totalPriceCell.textContent = `Total Price: Rs ${total}`;
};

getSumBtn.addEventListener("click", getSum);

