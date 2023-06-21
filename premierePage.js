document.addEventListener("DOMContentLoaded", function() {
    var titleElement = document.getElementById("entry-title");
    var textElement = document.getElementById("entry-text");

    var titleText = "ADRIEN RAVEL WEBSITE";
    var index = 0;
    var typingTimeout; // Variable pour stocker le timeout

    function displayLetters() {
        if (index < titleText.length) {
            titleElement.textContent += titleText.charAt(index);
            index++;
            typingTimeout = setTimeout(function() { displayLetters(index); }, 100);
        } else {
            textElement.style.opacity = 1;

            clearTimeout(typingTimeout); // Annuler le timeout pour arrêter le déplacement du curseur
            // Ajoutez votre condition ici pour arrêter l'écriture
            if (index === titleText.length) {
                var entryElement = document.getElementById("entry");
                entryElement.addEventListener("click", function() {
                    this.classList.add("hidden");
                    window.location.href = "pageAcceuil.html";
                });

                var imageElement = document.querySelector("#entry img");
                imageElement.classList.add("rotate-zoom");
            }
        }
    }

    displayLetters();
});
