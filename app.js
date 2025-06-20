import express from 'express';
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    const version = process.env.VERSION || '1.0.0';
    res.send(`Hello from our container! Version: ${version}. Deployed automatically!`);
})

app.listen(PORT,()=>{
    console.log('Server is running on port', PORT);
})