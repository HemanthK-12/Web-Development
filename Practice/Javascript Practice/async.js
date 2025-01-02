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

(async ()=>{
    await getData(1);
    await getData(2);
    await getData(3);
})();