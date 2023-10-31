import express from "express";





const app=express();
const port =8000;


app.get("/",(req,res)=>{
 

    const d = new Date();
    const day = d.getDay();
    console.log(day);

    let type ="a weekday"
    let adv ="its time to workhard"

    if(day===0 || day ===6)
    {
        type ="its weekend",
        adv ="its weekday"
    }

res.render("index.ejs", { daytype :type,
advice:adv});
});


app.listen(port, () => {
    console.log(`server is listening at ${port}`);
});

