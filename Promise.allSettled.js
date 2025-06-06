const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Resolved 1"));
const promise2 = new Promise((_, reject) => setTimeout(reject, 2000, "Rejected 2"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, "Resolved 3"));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 'Resolved 1' },
    //   { status: 'rejected', reason: 'Rejected 2' },
    //   { status: 'fulfilled', value: 'Resolved 3' }
    // ]
  });
