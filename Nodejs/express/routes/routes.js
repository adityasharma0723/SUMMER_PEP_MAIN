const express=require('express');
const PORT=3000;
const app=express();
app.use(express.json());

app.post("/", (req, res) => {
    res.status(200).json({ message: "Express router root POST endpoint" });
});

app.listen(PORT,()=>{
    console.log(`App is running on port: ${PORT}`);
});