const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("this is home page")
});
app.get('/api/products',(req,res)=>{
    products=[];
        const basePrice = 5;
        for(var i=0;i<10;i++){
            products.push({
            id:i+1,
            name:`product ${i+1}`,
            isAdded: false,
            price: basePrice*(i+1)
            });
        }
    res.json(products);
});

app.listen(port,()=>console.log(`Server started on port ${port}`));


