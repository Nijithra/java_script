//FOR loops 
sum = 0
for (var i=0;i<10;i++)
{
    sum = sum+i;
}
console.log("The sum in for loop is : ",sum)

//WHILE loops
sumw=0
var i = 0
while(i<10)
{
    sumw+=i;
    i++;
}
console.log("The sum in while loop is : ",sumw)

//DO-WHILE loops
 i=0
sumd=0
do{
    sumd+=i
    i++
}while(i<10)
console.log("The sum in do-while loop is : ",sumd)

//Array
//example1
arr=[10,20,30]
console.log(arr.length)
for(var i = 0;i< arr.length;i++){
    console.log(arr[i])
}

//example2
arr=[10,20,30.5]
console.log(arr.length)
for(var i = 0;i< arr.length;i++){
    console.log(arr[i])
}

//example3
arr = [10,20,true,false]
console.log(arr.length)
for(var i = 0;i< arr.length;i++){
    console.log(arr[i])
}
console.log("\n")

//for in loop
arr = [10,"String","Kongu",20,"True"]
for(const index in arr){
    console.log("The element present in",index,"is:",arr[index])
}
console.log("\n")

//for of loop
arr = [10,"String","kongu",20,"True"]
for(const value of arr){
    console.log(value)
}
console.log("\n")

//forEach loop
arr = [10,"String","kongu",20,"True"]
arr.forEach(value => {
    console.log(value)
});
console.log("\n")



//FOR IN LOOP
var kongu = new Object
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
for (const index in kongu)
{
    console.log("The element present in index",index,"is",kongu[index])
}
console.log("\n")

//FOR OF LOOP
var kongu = new Object
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
// for(element of kongu)
// {
//     console.log("The element is ",element)
// }
// console.log("\n")

// //FOR EACH LOOP
// var kongu = new Object
// kongu["Fees"]= "1L"
// kongu["Accomodation"] = "Good"
// kongu["No.of hostels"] = "10"
// kongu["Food "] = "Pretty Decent"
// kongu.forEach(element => {
//     console.log(element)
    
// });
// console.log("\n")

//map -> key value pair

//SET
//example1
setExample = new Set(["aiadmk","bjp","congress"])
console.log(setExample)
setExample.add("dmk")
setExample.add("indian")
console.log(setExample)
console.log("\n")

setExample = new Set(["aiadmk","bjp","congress"])
for(const value of setExample){
    console.log(value)
}
console.log("\n")

for(const index in setExample){
    console.log("The element present in",index,"is:",index)
}
console.log("\n")


//Maps
//example
mapeg = new Map([
    ["id","21ecr131"],
    ["Name","Nijithra"]
])
console.log(mapeg)

for(const value of mapeg){
    console.log(value)
}
console.log("\n")

console.log(mapeg.has("id"))
