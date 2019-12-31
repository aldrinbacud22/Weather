console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#Message')



message.textContent= ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                message.textContent=data.error
            } else {
                // console.log(data.location)
                // console.log(data.forecast)
                message.textContent = data.forecast
            }
        })
    })

})

