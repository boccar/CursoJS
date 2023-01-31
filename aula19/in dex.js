function distributeAmount(total, numberOfInstallments) {
    let amountPerInstallment = Math.floor(total / numberOfInstallments);
    let remainingAmount = total - (amountPerInstallment * numberOfInstallments);
    let installments = Array(numberOfInstallments).fill(amountPerInstallment);
    
    for (let i = 0; i < remainingAmount; i++) {
      installments[i]++;
    }
    
    return installments;
  }

let total = 1203.05;
let numberOfInstallments = 4;
let installments = distributeAmount(total, numberOfInstallments);
console.log(installments);