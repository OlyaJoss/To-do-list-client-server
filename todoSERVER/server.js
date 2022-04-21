let mockData = [
    { id: 1, text: 'создать список' },
    { id: 2, text: 'выполнить задачи' },
    { id: 3, text: 'получить результат' }
]

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 0) создать моковые данные +
// 1) сделать Get запрос
// 2) сделать Post запрос

app.all('/', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.post('/', function (req, res) {
    mockData.push(req.body);
    res.json(mockData);
})

app.get('/', function (req, res) {
    res.json(mockData)
})


 app.delete('/', function (req, res) {
        const idOfUser = parseInt(req.body.id);
        const userIdx = mockData.findIndex((user) => user.id === idOfUser); 
        if (userIdx !== -1) {
            restUsers = mockData.filter((user) => user.id !== idOfUser);
            mockData = { ...restUsers };
            res.json(mockData)
        } else {
            res.status(404).json()
        } 
    })

app.listen(8080, () =>
    console.log(`App are listening at port 8080`)
)