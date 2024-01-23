// //call back
// function ramusomu(welcomeMessage,CallBack){
//     setTimeout(function(){
//         console.log(welcomeMessage) 
//         CallBack();  
//     },2000)
// }
// function miniAni(){
//     console.log("Odi Poiru vanthudatha da thambi!!!")
// }
// ramusomu("Hello Ramu and Somu\nWelcome to kec",miniAni)

// console.log("\n")

//example1
function nijithra(){
    setTimeout(function(){
        console.log("Nijithra will come first")
    },3000)
}

function priya(){
    setTimeout(function(){
        console.log("priya will come second")
    },2000)
}

function kiruthi(){
    setTimeout(function(){
        console.log("kiruthi will come third")
    })
}

nijithra()
priya()
kiruthi()


//EXAMPLE2
function submitForm(buttonClick, db){
    setTimeout(function(){
        console.log(buttonClick)
        db();
    },2000)
}
function database(){
    console.log("Form submitted successfully")
}
submitForm("Form submit button clicked",database)

