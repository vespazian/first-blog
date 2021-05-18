//console.log('ceva?');

const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()
const personName = 'Georgel'

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true , useUnifiedTopology: true })

app.set ('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) =>{   
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: `at View.render (E:\\DigitalExplorer\\EXPLORER\\JustAWebServer\\markdown-blog\\node_modules\\express\\lib\\view.js:135:8
            dddddddddddddddddddddddddd 
            asdasdasd`
    },
    {
        title: 'Test Seccond Article',
        createdAt: new Date(),
        description: 'Test description for article two'
    }]
    //res.render('index', { text: 'Hello ' + personName + '!'}) //views//index.ejs
    res.render('articles/index', { articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)
