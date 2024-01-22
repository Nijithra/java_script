//Scope
//accesibility of a variable
//types of scope -> local, global, block

//global scope
var sum = 0
for (var i = 0;i < 10; i++)
{
    sum += i
}
console.log(sum)
console.log("\n")

i = 0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)
console.log("\n")

i=0
//do while
do{
    sum += i
    i++
}while(i<10)
console.log(sum)
console.log("\n")


//local scope
for(var i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)
console.log("\n")

var a=10
var b=10
console.log(a)
{
    let a=5
    let b=5
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)