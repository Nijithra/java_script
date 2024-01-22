function fun(a,b){
    console.log("Function with Argument and without return type")
    for(i=a;i<=b;i++)
    {
        if(i%2==0)
        {
            return i+" Even Number"
        }
        else{
            return i+" Odd Number"
        }
    }
}

console.log(fun(5,10))

