import express from "express";

const app = express();

app.use((req,res) => {
    res.send("Hello from the server");
})

app.listen(3000, () => {
    console.log("Server listening at http://localhost:3000");
});

/Users/vamsiduvvana/Code/devtinder-be/src/app.js