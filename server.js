// import express. create an instance of express:
const express = require("express");     // you can now use everything inside the express class. 
const faker = require("faker"); // importing faker. 

//create an instance of the server.
const app = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// create a class
class User {
    constructor(){
        this._id = faker.random.uuid();  //creates an id for each generated user. 
        this.firstName = faker.name.firstName();   //properties are assigned to Faker's methods to generate information. 
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.stateAbbr();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

//at the route '/user', generate a brand new instance of a user. 
app.get("/users/new",(req, res) => {
    return res.json(new User());    // this line creates a User instance that will be sent to the JSON response in Postman. 
});

app.get("/companies/new", (req, res) => {
    return res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
   return res.json({user: new User(), company: new Company()});
});

//create a route with two parameters (request and response)
// app.get("/", (request, response) => {
//     return response.json({status: 200, message: "Hellow World"});
// });

// the listen function must always be the last line. 
app.listen(port, () => console.log("Listening on port " + port));