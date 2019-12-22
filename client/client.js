console.log("hello world")

const form = document.querySelector('form')
const API_URL = 'http://localhost:5000/submit'

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name')
    const content = formData.get('content')

    const answer = {
        name,
        content
    }

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(answer),
        headers: {
            'content-type': 'application/json'
        }
    })


})
