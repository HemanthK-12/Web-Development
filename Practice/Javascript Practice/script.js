let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(company);
company.splice(0,1);
console.log(company);

company.splice(1,1,"Ola");
console.log(company);

company.push("Amazon");
console.log(company);