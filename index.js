const express = require('express')

const app = express()
const port = 8080;

app.use(express.json());

let articles = [
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
];

app.get('/get_articles', (req, res) => {
    let response = "";

    for (let article of articles) {
        response += `<h2>${article.title}</h2><p>${article.description}</p>`;
    }
    
    res.send(response);
});

app.post('/add_articles', (req, res) => {
    let article = req.body;

    articles.push(article);

    res.send(`Added article (${article.title})`);
});

app.delete('/del_articles/:articleId', (req, res) => {
    let articleId = req.params.articleId;
    let index = articles.findIndex(a => a.id == articleId);

    articles.splice(index, 1);

    res.send(`Removed article (${articleId})`)
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});