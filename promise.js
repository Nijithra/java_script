function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });

  function isLocationValid(loc) {
    var validLocation = "namakkal";
    return loc === validLocation;
  }
  
  function location() {
    return new Promise((resolve, reject)=>{
      setTimeout(function () {
        var loc = "namakkal";
        console.log(loc);
        if (isLocationValid(loc)) {
          resolve("Location found");
        } else {
          reject("Location not found");
        }
      }, 2000);
    });
  }
  
  location()
    .then((response) =>{
      console.log(response);
    })
    .catch((errorMessage) =>{
      console.log(errorMessage);
    });
  
//Callback


function database(){
    console.log("Form submitted successfully..!!")
 }
 
 function submitForm(buttonClick,db){ // function definition
    setTimeout(()=>{
     console.log(buttonClick)
         db()
    },2000)
 }
 submitForm("Form submit button clicked",database) // Function calling

 //Async await
 async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                //console.log(response)
                response("Example for async/Await");
            }, 1000)
        }
    );
    console.log(await promise);
}
asAw()