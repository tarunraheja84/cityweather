const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const port=process.env.PORT || 3000

const staticPath=path.join(__dirname,'../public')
app.use(express.static(staticPath))


// const templatePath=path.join(__dirname,'../templates/views')
// const partialPath=path.join(__dirname,'../templates/partials')

// app.set('view engine', 'hbs');
// app.set('views', templatePath);
// hbs.registerPartials(partialPath)



// app.get('/', (req, res) => {
//   res.render('index.hbs')
// })
// app.get('/about',  (req, res) => {
//     res.render('about.hbs')
//   })



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/about.html'))
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
