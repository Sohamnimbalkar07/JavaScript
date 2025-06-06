const debounce = (fun, delay) => {
 let timer = null;
 return (...args) => {
   clearTimeout(timer)
   timer = setTimeout(()=> {
     fun(...args)
   }, delay)
 }
}

const search = (data) => {
   console.log("searching", data);
}

const debounceFunction = debounce(search, 1000);
debounceFunction("Soham 1");
debounceFunction("Soham 2");
debounceFunction("Soham 3");
debounceFunction("Soham");
debounceFunction("Soham");
debounceFunction("Soham");
debounceFunction("Soham");
debounceFunction("Soham");
debounceFunction("Soham Nimbalkar");


