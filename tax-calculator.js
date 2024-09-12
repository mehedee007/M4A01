function calculateTax(income, expenses) {
    if(0 <= income && 0 <= expenses && income >= expenses && typeof income === 'number' && typeof expenses === 'number'){
        const diff = income - expenses;
        const tax = diff * .2;
        return tax;
    }else{
        return "Invalid Input";
    }
}

const tax = calculateTax('6000',1500);
console.log(tax);