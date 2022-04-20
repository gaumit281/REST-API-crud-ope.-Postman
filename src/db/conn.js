const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics", {
    
}).then(() => {
    console.log("Database conn successful...");
}).catch((e) => {
    console.log("Database Connection error");
})