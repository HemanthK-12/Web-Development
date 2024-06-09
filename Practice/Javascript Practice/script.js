let n=prompt("Enter a number");
let str=prompt("Enter n elements");
let arr=str.split(",").map(Number);
let total=0,pro=1;
total=arr.reduce
    (
        (total,num)=>
            {
                return total+num;
            }
    )
console.log(`Total = ${total}`);
pro=arr.reduce
    (
        (pro,num)=>
            {
                return pro*num;
            }
    )
console.log(`Product = ${pro}`);