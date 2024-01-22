//FOR loops 
sum = 0
for (var i=0;i<10;i++)
{
    sum = sum+i;
}
console.log("The sum in for loop is : ",sum)

//WHILE loops
sumw=0
var i =0
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