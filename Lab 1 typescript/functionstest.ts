//named function
function add(x, y) {
    return x + y;
}
//anonymous function
let myFunc = function(x, y) {return x + y;};

//=================================================

//exercise 1
function stLength(s: string) {
    let x: number = s.length;
    return x;
}
console.log("With spaces: ", stLength("test 1"));

//exercise 2
function stLength2(s: string) {
    let x: number = s.replace(/\s+/, "").length;
    return x;
}
console.log("Without spaces: ", stLength2("test 1"));

//exercise 3
function stLength3(s:string, spaces: boolean=false) {
    let x: number;
    if(spaces) {
        x = s.replace(/\s+/, "").length;
    }
    else {
        x = s.length;
    }
    return x;
}
console.log("Both - w/ spaces: ", stLength3("test 1 2 3"));
console.log("Both - w/o spaces: ", stLength3("test 1 2 3", true));