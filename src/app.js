const express=require('express')
const path=require('path');
const request=require('request')
const convert=require('./app.1')
const hbs=require('hbs');
const publicpath=path.join(__dirname,'../public');
const viewpath=path.join(__dirname,'../templates/views');
const partialpath=path.join(__dirname,'../templates/partials')
const app=express()
const port=process.env.PORT || 3000;
app.set('view engine','hbs')
app.set('views',viewpath);
app.use(express.static(publicpath))
hbs.registerPartials(partialpath)
app.get('',(req,res)=>{
    res.render('index',{
        title:'pranav',
        name:'pranav'
    })
})
app.get('/about',(req,res)=>{
    res.render('aboutus',{
        title:'pranav',
        name:'pranav'
    })
})
app.get('/weather',(req,res)=>{ 
    if(!req.query.address){
        return  res.end({
             error:'You must provide an address'
         })
     }
    convert.convert(req.query.address,(data)=>{
        res.send({name:data})
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'pranav',
        name:'pranav'
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
       return  res.end({
            error:'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        title:'pranav',
        name:'pranav'
    })
})
app.listen(port,()=>{
    console.log('Server is up on port.'+port)
})