//Class
//Class :: Characteristics + Behaviour 

/*var and function keyword is not allowed in class.
this keyword is used to access the members of same class.
super keyword is used to access the members of parent's class.
*/

class Demo
{
    //instance variable i.e. non static variable can be accessed by using object of the class.Object creation is must.
    no = 10

    //Static field which can be accessible by the class name.No need of object creation.
    static num = 12

    //constructor is a function which gets called automatically,when we create the object.It initializes the variables after memory allocation.
    constructor()
    {
        console.log("Non static variable : "+this.no);
        //console.log("Non static variable : "+this.num);               //ERROR
        console.log("Static variable : "+Demo.num);
        //console.log("Non static variable : "+Demo.no);                //ERROR
    }

    //Non Static Function
    randomFunction(str:string):void
    {
        console.log("Hello "+str);
    }

    //Static Function
    static staticFun()
    {
        console.log("Inside Static");
    }
}

console.log("Before object creation : "+Demo.num);
//Object Creation
var obj = new Demo();

//calling non-static function using object of the class
obj.randomFunction("Mansi");

//calling static function using class name
Demo.staticFun();
//obj.staticFun()                                   //ERROR

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Inheritance : Reusability (Same as java)
A class inherits from another class using the ‘extends’ keyword.
Child classes inherit all properties and methods except private members and constructors from the parent class.
*/
class Animal
{
    cnt = 5
    constructor()
    {
        console.log("Inside Animal");
    }

    count()
    {
        console.log("Total count : "+this.cnt)
    }
}

class Dog extends Animal
{
    //Constructor of derived class must contain super call
    constructor()
    {
        super()
        console.log("Inside Dog")
        super.count()
    }
}

var obj1 = new Animal()
var obj2 = new Dog()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*There are 3 access specifiers in typescript.
For the first 3, while extending the class rules are same.
1.public : Each member is public by default.So that anyone can access it.
2.private : This member is not accessed outside the class.
3.protected : Only child class members and members of that class itself can access itself.
*/
class Specifiers
{   
    public no : number =  11;
    private name : string = "Mansi"
    protected val : number = 35

    print()
    {
        console.log("Inside class : Public Member : "+this.no);
        console.log("Inside class : Private Member : "+this.name);
        console.log("Inside class : Protected Member : "+this.val);
    }
}

var obj3 = new Specifiers();
obj3.print()
console.log("Outside class : Public Member : "+obj3.no);

//console.log("Outside class : Private Member : "+obj3.name);               //ERROR
//console.log("Outside class : Protected Member : "+obj3.val);                //ERROR
