const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'BoomShakaLaka!'
    })
})

function isValidSubmit(submit) {
    return submit.name && submit.name.toString().trim() !== '' &&
    submit.content && submit.content.toString().trim() !== ''
}

app.post('/submit', (req, res) => {
    if (isValidSubmit(req.body)) {
        //insert into db...
        const submit = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        }

        console.log(submit)
    } else {
        res.status(422)
        res.json({
            message: `Bruh. Name and content are kinda required.`
        })
    }
    
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})