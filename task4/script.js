let replaceText = document.querySelector('#text');

replaceText.addEventListener('click', function () {
    
    document.querySelector('#text').textContent = prompt('Текст изменится на тот, что ты введёшь');
})

replaceText.addEventListener('click', function () {
    
    text.preventDefault();
})
