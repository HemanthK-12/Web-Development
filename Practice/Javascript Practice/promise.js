//see, here we are asking for data from the function getData
//instead of directly printing the data(which may take some time and hence can slow down the program),the function is giving us a promise
//saying that i promise you that data will be sent to you
//untill then, the state of the promise will be in pending state.
//if resolved, it comes to fulfilled state and gives the data
//if not fulfilled, it goes to reject state and fails to give datam, whcich can then be handled byb us.

//generally we don't create promises, but are given promises by api, on which we'll be working.

//whenever we want to process something from a promise, whether it is fulfilled or rejected, we use the promise.then() and promise.catch() methods respectively.
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data i received is : ", dataId);
      if(dataId)
        resolve("Success");
    else  
        reject("No text given");
      if (getNextData) getNextData();
    }, 5000);
  });
}
let promise = getData(1);
//we process this staement if the promise is fulfilled and "res" describes the data that is received inside resolve() function.
for(let i=0;i<2;i++){

promise.then((res) => {
  console.log(res);
});
//we process this staement if the promise is rejected and "err" describes the error code that is received inside reject() function.
promise.catch((err) => {
  console.log(err);
});
promise=getData();
}