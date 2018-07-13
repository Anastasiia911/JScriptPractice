(function () {
    var age = 2;
    var countOfYears = 60 - age;
    var monthlyPayment = 704;
    var interestRate = 0.12;
    var percentage = 0;

    var sum = 0;


    // calculate how much money you will have after countOfYears of savings
    // with given monthlyPayment and interestRate


    function createRetirementPlan(age) {
        console.log("Age is : " + age);

        if (age == 0) {
            return sum;
        }

        sum = monthlyPayment * 12 * interestRate + createRetirementPlan(--age);

    }

    function calculateInterestRate(sum) {
        return sum * interestRate;
    }

    createRetirementPlan(age);
    printAccountStatement();


    function printAccountStatement() {
        console.log("Account: " + sum.toLocaleString('en-US', {maximumFractionDigits: 0}));
        console.log("Mon  CF: " + (calculateInterestRate(sum) / 12).toLocaleString('en-US', {maximumFractionDigits: 2}));
    }

})();