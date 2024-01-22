// Objects

// how will you declare objects.
// 1st way
var customerDetails={
    "Name": "Tamil",
    "Age": 30,
    "phone": "7708486706"
}

// Interview questions:
// "," is optional for your last key:pair value
// why key does not hold any " " in your object
// it has internally
// key will not hold " " as it is inbuiltly present

customerDetails["id"] = "21ECR131"
console.log(customerDetails)

// 2nd way
var customerDetails = {}
customerDetails["id"] = "21ECR131"
customerDetails["name"] = "Nijithra"
customerDetails["age"] = "20"
customerDetails["phone"] = "7708486706"

console.log(customerDetails)

// 3rd way
var kongu = new Object()
kongu["Fees"] = "1L"
kongu["Accomodation"] = "Good"
kongu["No of Hostels"] = "10"
kongu["Food"] = "Decent"
console.log("The Kongu Specialities are :",kongu)
console.log(kongu["Food"])