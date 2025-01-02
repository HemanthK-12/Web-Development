function getData(dataId)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("Data = ",dataId);
            resolve("success");
        },2000);
    });
}

//we can recreate the same thing as callback hell with promises, but without the extra argument in the function(getNextData)
// let p1=getData(1);
// p1.then((res)=>
// {
//     console.log(res);
//     let p2=getData(2);
//     p2.then((res)=>
//     {
//         console.log(res);
//         let p3=getData(3);
//         p3.then((res)=>
//         {
//             console.log(res);
//         });
//     });
// });

// THIS CAN ALSO BE DONE IN THE BELOW METHOD CALLED **PROMISE CHAINING**
getData(1).then((res)=>
{
    console.log(res);
    return getData(2);
}).then((res)=>
{
    console.log(res);
    return getData(3);
}).then((res)=>
{
    console.log(res);
});

//This is good, but still complicated, so we now learn async await method.