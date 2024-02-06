express=require('express')
app=express()
port=3000


app.listen(port,()=>{
    console.log('server runing')
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.get('/register',(req,res)=>{
    res.render('register.ejs')
})

app.get('/index',(req,res)=>{
    res.render('index.ejs')
})