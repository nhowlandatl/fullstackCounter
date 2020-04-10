const addButton = document.getElementById("increment");
const decButton = document.getElementById("decrement");
const resetButton = document.getElementById('reset');
const countElement = document.getElementById('count');
const amountInput = document.getElementById('amount');
const sendButton = document.getElementById('send');

document.addEventListener('DOMContentLoaded', function () {
    axios.get('/api/count')
        .then(function (response) {
            countElement.innerHTML = response.data;
        })
});

sendButton.addEventListener('click', function () {
    axios.post('/api/increment', {
        count: amountInput.value
    })
        .then(function (response) {
            countElement.innerHTML = response.data;
        });
})

addButton.addEventListener('click', function () {
    axios.post('/api/increment')
        .then(function (response) {
            countElement.innerHTML = response.data;
        });
})

decButton.addEventListener('click', function () {
    axios.post('/api/decrement')
        .then(function (response) {
            countElement.innerHTML = response.data;
        });
})

resetButton.addEventListener('click', function () {
    axios.post('/api/reset')
        .then(function (response) {
            countElement.innerHTML = response.data;
        });
});