document.getElementById("calculateBudget").addEventListener("click", function() {
    try {
        let userIncome = parseFloat(prompt("Please input your monthly income (numbers only):"));
        let userExpenses = parseFloat(prompt("Please input your monthly expenses (numbers only):"));
        let projectionMonths = parseInt(prompt("How many months do you want to calculate your budget for?"));

        if (isNaN(userIncome) || isNaN(userExpenses) || isNaN(projectionMonths) || userIncome < 0 || userExpenses < 0 || projectionMonths <= 0) {
            throw new Error("Error: Enter only positive numbers.");
        }

        let monthlySavings = userIncome - userExpenses;
        let totalProjectedSavings = (monthlySavings * projectionMonths).toFixed(2);

        let outputDiv = document.getElementById("budgetResults");
        outputDiv.innerHTML = `
            <p>Monthly Income: $${userIncome.toFixed(2)}</p>
            <p>Monthly Expenses: $${userExpenses.toFixed(2)}</p>
            <p>Monthly Savings: $${monthlySavings.toFixed(2)}</p>
            <p>Total Projected Savings: $${totalProjectedSavings}</p>
        `;

        for (let i = 1; i <= projectionMonths; i++) {
            let paragraph = document.createElement("p");
            paragraph.textContent = `Month ${i}: $${(monthlySavings * i).toFixed(2)}`;
            outputDiv.appendChild(paragraph);
        }

        if (monthlySavings < 0) {
            let warningMessage = document.createElement("p");
            warningMessage.textContent = "Alert: Your expenses are higher than your income!";
            warningMessage.style.color = "red";
            outputDiv.appendChild(warningMessage);
        }
    } catch (error) {
        alert(error.message);
    }
});
