
//creating string
let name="Emaan"  //with double quotes

let namee='Emaan' //with single quotes

console.log(name.length)

//Accessing string elements
console.log(namee[0])
console.log(namee[1])
console.log(namee.charAt(1))

//Escape sequence characters
let fruit="man\go'"
console.log(fruit)

fruit="Apple\nmango"
console.log(fruit)


//String methods
let Name="Emaan"
//get length of string
console.log(Name.length)

//convert characters to uppercase
console.log(Name.toUpperCase())

//convert characters to lower case
console.log(Name.toLowerCase())

//String Slicing
console.log(Name.slice(1,3))  //4 is not include
console.log(Name.slice(2))

//replace one thing with another thing in a string
let name1="Eman Sajjad"
console.log(name1)
let new_name=name1.replace("Sajjad","Eman")
console.log(new_name)


//concatenation method
let life="work work work"
let sentence1=name1.concat(" work life ",is, good,"***")
console.log(sentence1)


//Trim Method--->To remove white spaces from start and end
let friend="              Rabia            "
console.log(friend)
console.log(friend.trim())



//using forloop to print a string
let x="Hello World"
for(let i=0;i<x.length;i++){
    console.log(x[i].toUpperCase())
}


let result=""
for(let i=0;i<x.length;i++){
    result+=x[i].toLowerCase()
}
console.log(result)


//typeof
console.log(typeof result)


//indexof method--->return the index of first occurance of a substring and -1 if not found
x="Helloo World"
console.log(x.indexOf("World"))


//split() method--->split a string into an array of substring based on a specified separator
let fruits="apple,orange,banana"
let fruits1=fruits.split(",")
console.log(fruits1)


//endswith() method---->checks if a string ends with a specified substring
let str="Hello World"
console.log(str.endsWith("World"))


//startswith() method--->checks if a string starts with a specified substring or not
console.log(str.startsWith("World"))
console.log(str.startsWith("Hello"))


//includes() method--->check if a string contains a specified subsring
console.log(str.includes("Wo"))
console.log(str.includes("World"))



//localecompare() method--->compare two strings in current locale--->ASCII VALUE
let strr1 = "apple";
let strr2 = "banana";
console.log(strr1.localeCompare(strr2)); // it will return-1 (if strr1 comes before strr2 in dictionary order(ASCII VALUES))



//repeat() method---->returns a new string with a specifid number of copies of original one
let str1="Hello"
console.log(str1.repeat(3))


//Template Literals
let word1="Software"
let word2="Engineer"

let sentence=`${word1} is a friend of ${word2}`

console.log(sentence)