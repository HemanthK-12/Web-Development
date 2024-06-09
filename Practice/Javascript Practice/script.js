str=prompt("Enter the elements of the array separated by commas");
arr=str.split(",");

arr.forEach((x)=>{
    console.log(x**2);
})