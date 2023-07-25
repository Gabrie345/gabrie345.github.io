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

(function() {
    console.log("Biblioteca do Emailjs inicializada.");
    emailjs.init("Z0iEVgBQFyoxTkvaS");
})();

function sendEmail() {
    const contactForm = document.getElementById("contact-form");
    emailjs.sendForm("service_iezhfgw", "template_lhodvsv", contactForm)
      .then(function(response) {
        alert("Email sent successfully!");
      }, function(error) {
        alert("Failed to send email. Please try again later.");
      });
  }
