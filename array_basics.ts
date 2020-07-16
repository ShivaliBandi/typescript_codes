//Array Basics
//Array :: Collection of Homogeneous Elements.Contiguous memory allocation. Indexed access

//Array Declaration
var arr1 : number[] = [10,20,30]
console.log(arr1)                        //[10,20,30]

var arr2 : string[] = ["Mansi","Shivali","Ryan Dahl"]
console.log(arr2)                       //[ 'Mansi', 'Shivali', 'Ryan Dahl' ]

//We can create the array by creating object of Array class and we can also use various method from array class.
//Specify the no of elements at the time of object creation

//It will create empty array
var arr3 : number[] = new Array()       //[]
console.log(arr3)

var arr4 : number[] = new Array(4)       
console.log(arr4)                       //[ <4 empty items> ]

//We can directly initialize the array
var arr5 : string[] = new Array("hi","hello","bye")       
console.log(arr5)

//Traversing the whole array
var i : number = 0;
for(i = 0 ; i < arr5.length; i++)
{
    console.log(arr5[i]);
}
