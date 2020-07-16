//Tuple_basics
//Tuple is the collection of Heterogeneous elements just like structure. Dont specify the datatype for tuple.

var tup1 = ["Mansi",100,6.9,"Mumbai"]
console.log(tup1)

//We can access the tuple elements by index also
console.log(tup1[2])

//We can update the value.
tup1[2] = 8.9
console.log(tup1)

//Inserting and poping elements from tuple
tup1.push("Hello")
console.log(tup1)

tup1.pop()
console.log(tup1)