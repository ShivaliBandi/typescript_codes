
//Functions in Typescript

//Syntax
/*
function funct_name(parameter1 : datatype, parameter2 : datatype and so on) : datatype of return value
*/

//Addition of two numbers
//It is optional to specify the datatype of return value

function Add(no1 : number , no2 : number):number
{
    return no1+no2;
}

//Subtraction of two numbers
//No need to specify the datatype of return value.
function Sub(no1 : number , no2 : number)
{
    return no1-no2;
}

var ret1 = Add(10,20);
console.log("Addition : "+ret1);

var ret2 = Sub(100,20);
console.log("Subtraction : "+ret2);


//There are 3 types of parameters for Functions :
//1.Default Parameter :: Same as cpp and java.That is if you give the value for this parameter, then we will use your value,
//otherwise we will use default one.
function info(name : string , city : string , country : string = "India"){
    console.log("Your info :\n Name : "+name+"\n City : "+city+"\n Country : "+country)
} 

info("Mansi","Mumbai");
info("Sanika","Amsterdam","Germany");


//2.Rest Parameter :: You can pass any no of parameters to the function.The values passed must all be of the same type.
function Addition(...arr : number[])
{
    var i : number = 0 , sum : number = 0
    for(i = 0 ; i < arr.length ; i++)
        sum += arr[i]
    return sum

}
var ret = Addition(10,20,40,50)
console.log("Addition of given nos are : "+ret)

//3.Optional Parameter :: Not compulsory to give this parameter.By adding ? to the end of the parameter it becomes optional parameter.
//That is if you give the value for this parameter, then we will use your value,
//otherwise we will kept it as a undefined.
function details(firstname : string , lastname? : string){
    console.log("Your details:: \nFirst Name : "+firstname+"\nLast Name : "+lastname);
}

details("Mansi");
details("Mansi","More");
// error, too many parameters
//details("Mansi","More","Sanika");


/* Anonymous Function : A Functions without name.
These functions are dynamically declared at runtime. 
Working is same as normal function.
*/
var noname = function(str1 : string)
{
    var i : number = 0;
    var str : string = ""
    for(i = str1.length - 1 ; i >= 0 ; i--)
        str = str + str1[i]

    return str

}

console.log(noname("Mansi"))
console.log(noname("sanika"))


//Recursive Function

function factorial(no : number): number{

    if(no <= 1)
        return 1
    else
    {
        return (no * factorial(no-1))
    }
}

console.log("Factorial of no is : "+factorial(1));


//Lambda Function :: It refers to anonymous functions in programming. 
//Lambda functions are used to represent anonymous functions. 
//These functions are also called as Arrow functions.
//=> : Fat arrow notation/ Lambda notation
var noname = (str1 : string)=>
{
    var i : number = 0;
    var str : string = ""
    for(i = str1.length - 1 ; i >= 0 ; i--)
        str = str + str1[i]

    return str

}

console.log(noname("Mumbai"))