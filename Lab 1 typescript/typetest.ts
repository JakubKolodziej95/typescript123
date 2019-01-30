//boolean
let first: boolean = true;
console.log("The value assigned to first is: " +first);

//number
let decimal: number = 7;
console.log("The value assigned to decimal is: " +decimal);
let hex: number = 0xf00d;
console.log("The value assigned to hex is: " +hex);
let binary: number = 0b1010;
console.log("The value assigned to binary is: " +binary);
let octal: number = 0o744;
console.log("The value assigned to octal is: " +octal);

//string
let color: string = "blue";
color = 'red';
console.log("The value assigned to color is: " +color);

//any
let notSure: any = 4;
console.log("The value assigned to notSure is: " +notSure);
notSure = "maybe a string instead";
console.log("The value assigned to notSure is: " +notSure);
notSure = false;
console.log("The value assigned to notSure is: " +notSure);