//Scope in typescript

//global variable
var global:number = 11

//class
class demo
{
    //instance variable i.e. Non static
    non:number = 12

    //static variable
    static stat:number = 13

    fun():void
    {
        var local:number = 14
        console.log("Global variable is "+global);
        console.log("Local variable of fun function is "+local);
        console.log("Static variable of demo class is "+demo.stat) ;
        console.log("Non-Static variable of demo class is "+this.non);
    }
}

var obj = new demo();
console.log("Static variable of demo class can also be accessible outside the class : "+demo.stat);
//you can access the static field by using class name only
//console.log(obj.stat)                   ERROR

//You cannot access non static variable using this keyword outside the class
console.log("Non-Static variable of demo classc an also be accessible outside the class : "+this.non);//outpu it will give as undefined

//You can access non static variable using object outside the class
console.log("Non-Static variable of demo classc an also be accessible outside the class : "+obj.non);
obj.fun()

