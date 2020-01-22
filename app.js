const formWrap = document.querySelector('form')
const errorEmpty = document.querySelector('.error-empty')
const errorMatch = document.querySelector('.error-match')
const nameInput = document.querySelector('#name')
const passwordInput = document.querySelector('#password')
const confirmPassInput = document.querySelector('#confirm-password')
const submitBtn = document.querySelector('#submit-btn')
const errorMin = document.querySelector('.error-min')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.transform = 'scale(0)'
})

submitBtn.addEventListener('click', submit)

function submit(e) {
    e.preventDefault()

    //TO CHECK EMPTY VALUES
    if (nameInput.value === '' || passwordInput.value === '' || confirmPassInput.value === '') {
        errorEmpty.style.display = 'block'
        setInterval(() => {
            errorEmpty.style.display = 'none'
        }, 5000);
    } //TO CHECK umatched password VALUES
    else if (passwordInput.value !== confirmPassInput.value) {
        errorMatch.style.display = 'block'
        setInterval(() => {
            errorMatch.style.display = 'none'
        }, 5000);
    } //TO CHECK for less than 7 characters
    else if (nameInput.value.length <= 6 || passwordInput.value.length <= 6 || confirmPassInput.value.length <= 6) {
        errorMin.style.display = 'block'
        setInterval(() => {
            errorMin.style.display = 'none'
        }, 5000);
    } //console message --- pop-up
    else {
        console.log(`name : ${nameInput.value}  password : ${passwordInput.value}`)
        modal.style.transform = 'scale(1)'
        nameInput.value = ''
        passwordInput.value = ''
        confirmPassInput.value = ''
    }

}

// The time at the top

function writeTime() {
    let time = document.querySelector('.time')
    let result = new Date().toLocaleTimeString()
    time.textContent = `${result}`
}
setInterval(() => {
    writeTime()
}, 1000);

//Secondds counter at the bottom

let initial = 0;
let seconds = document.querySelector('.seconds')

function writeSeconds() {
    seconds.textContent = initial++
}
setInterval(() => {
    writeSeconds()
}, 1000);
