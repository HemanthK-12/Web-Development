let str=prompt("Enter the elements of the array separated by commas");
arr=str.split(",");

let newArr=arr.filter((x)=>{
    return (x>90);
})

str=newArr.join(",");
console.log(str);