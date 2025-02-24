(function() {
    var localVar = 'This is a local variable';
    console.log(localVar);
})();

const result = (function(a, b) {
    return a + b;
})(5, 10);

console.log(result);