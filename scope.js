function parent(){
    let var1 = "parent"
    function child() {
    var var2 = "child"
    console.log("var1", var1);
    }
    console.log("var2", var2)
    child();
}

parent()