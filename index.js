document.getElementById("calculate-button").addEventListener("click", function() {
    const incomeInput = document.getElementById("income");
    const extraIncomeInput = document.getElementById("extra-income");
    const deductionsInput = document.getElementById("deductions");
    const ageSelect = document.getElementById("age");
    
    const income = parseFloat(incomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value);
    const deductions = parseFloat(deductionsInput.value);
    const ageGroup = ageSelect.value;
    
    // Validation flags
    let hasErrors = false;
    
    // Validate inputs
    if (isNaN(income)) {
        document.getElementById("income-error").style.display = "inline";
        hasErrors = true;
    } else {
        document.getElementById("income-error").style.display = "none";
    }
    
    if (isNaN(extraIncome)) {
        document.getElementById("extra-income-error").style.display = "inline";
        hasErrors = true;
    } else {
        document.getElementById("extra-income-error").style.display = "none";
    }
    
    if (isNaN(deductions)) {
        document.getElementById("deductions-error").style.display = "inline";
        hasErrors = true;
    } else {
        document.getElementById("deductions-error").style.display = "none";
    }
    
    // If there are errors, stop the calculation
    if (hasErrors) {
        return;
    }
    
    // Calculate overall income
    const overallIncome = income + extraIncome - deductions;
    
    let taxAmount = 0;
    
    // Calculate tax based on the overall income and age group
    if (overallIncome > 8) {
        const taxableIncome = overallIncome - 8;
        if (ageGroup === "<40") {
            taxAmount = 0.3 * taxableIncome;
        } else if (ageGroup === "40-60") {
            taxAmount = 0.4 * taxableIncome;
        } else if (ageGroup === "≥60") {
            taxAmount = 0.1 * taxableIncome;
        }
    }
    
    // Display the calculated tax amount
    document.getElementById("tax-amount").textContent = `Tax Amount: ₹${taxAmount.toFixed(2)} Lakhs`;
});


function validate(input) {
    var income = input.value;
    var isValid = /^\d*\.?\d*$/.test(income); 
    
    var errorIcon = document.getElementById("income-error");
    if (!isValid) {
        errorIcon.style.display = "inline-block";
    } else {
        errorIcon.style.display = "none";
    }
}

function validate(input) {
    var value = input.value;
    var isValid = /^\d*\.?\d*$/.test(value); 
    
    var errorIconId = input.id + "-error"; 
    var errorIcon = document.getElementById(errorIconId);
    
    if (!isValid) {
        errorIcon.style.display = "inline-block";
    } else {
        errorIcon.style.display = "none";
    }
}
