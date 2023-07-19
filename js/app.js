var toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
    console.log(toggleButton);
    var body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Modo Claro';
        } else {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Escuro';
        }
});
