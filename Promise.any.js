const p1 = Promise.reject("❌ Failed 1");
const p2 = Promise.resolve("✅ Success");
const p3 = Promise.reject("❌ Failed 2");

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log("🎉 First success:", result);
  })
  .catch((err) => {
    console.log("😞 All failed:", err);
  });
