const loanForm = document.getElementById('loanForm');
const monthlyPayment = document.getElementById('monthlyPayment');
const totalPayment = document.getElementById('totalPayment');
const totalInterest = document.getElementById('totalInterest');

loanForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const principal = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const payments = parseInt(document.getElementById('years').value) * 12;

    const x = Math.pow(1 + interestRate, payments);
    const monthly = (principal * x * interestRate) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.textContent = `₹${monthly.toFixed(2)}`;
        totalPayment.textContent = `₹${(monthly * payments).toFixed(2)}`;
        totalInterest.textContent = `₹${((monthly * payments) - principal).toFixed(2)}`;
    } else {
        alert('Please check your input values');
    }
});
