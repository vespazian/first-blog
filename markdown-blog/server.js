//console.log('ceva?');

const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
const personName = 'Georgel'

app.set ('view engine', 'ejs')

app.use('/articles', articleRouter)



app.get('/', (req, res) =>{   
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test description'
    }]
    //res.render('index', { text: 'Hello ' + personName + '!'}) //views//index.ejs
    res.render('index', { articles: articles})
})

app.listen(5000)
