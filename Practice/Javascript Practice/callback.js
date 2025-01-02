//callback hell

//this will print 1,2,3,.. after every 1 second and only if the previous word is already printed

//this is very hard to understand and also not a good coding practice, so they introduced promise chain to combat this.
function getData(data,nextdata)
{
  setTimeout
  (
    ()=>
    {
      console.log("Data i received is : ",data);
      if(nextdata)
        nextdata();
    }
  ,1000);
}

getData
(1,()=>
      {
        getData
        (2,()=>
              {
                getData
                (3,()=>
                      {
                        getData
                        (4,()=>
                              {
                                getData
                                (5,()=>
                                      {
                                        getData
                                        (6,()=>
                                              {
                                                getData
                                                (7,()=>
                                                      {
                                                        getData
                                                        (8,()=>
                                                              {
                                                                getData
                                                                (9,()=>
                                                                      {
                                                                        getData
                                                                        (10);
                                                                      });
                                                              });
                                                      });
                                              });
                                      });
                              });
                      });
              });
      });