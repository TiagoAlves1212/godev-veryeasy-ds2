const btnCriar = document.querySelector('button')

btnCriar.addEventListener('click', () => {
    const inputNumber = parseInt(document.querySelector('#input-number').value)
    const chunks = Array.from({length: inputNumber}).fill('chunk').join('-')
    const result = document.querySelector('#result').innerHTML = chunks
})