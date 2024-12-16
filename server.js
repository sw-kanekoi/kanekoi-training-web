const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// ミドルウェア
app.use(bodyParser.json());

// Statics
app.use(express.static('public'))

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});

// GET：「Hello World」を返す
app.get('/', (req, res) => {
    res.send('Hello World');
});

// POST：リクエストパラメータとして2つの整数を渡すと、レスポンスとしてその合計を返す
app.post('/sum', (req,res) => {
    const { arg1, arg2 } = req.body;
    let result = ''

    if(!arg1 || !arg2){
        return res.status(400).json({error: 'Both arg1 and arg2 are required!'})
    }
    if(isNaN(arg1) || isNaN(arg2)){
        result = "Number型ではない"
    }else {
        result = Number(arg1) + Number(arg2);
    }
    res.json({result})
})

// GET：（上と同じ）リクエストパラメータとして2つの整数を渡すと、レスポンスとしてその合計を返す
app.get('/sum', (req, res) => {
    const { arg1, arg2 } = req.query;
    let result = 0;

    if (isNaN(arg1) || isNaN(arg2)) {
        res.status(400).send('Missing arguments');
    } else {
        result = Number(arg1) + Number(arg2)
        res.send(String(result)); 
    }
})