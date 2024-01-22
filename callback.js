//call back
function ramusomu(welcomeMessage,CallBack){
    setTimeout(function(){
        console.log(welcomeMessage) 
        CallBack();  
    },2000)
}
function miniAni(){
    console.log("Odi Poiru vanthudatha da thambi!!!")
}
ramusomu("Hello Ramu and Somu\nWelcome to kec",miniAni)