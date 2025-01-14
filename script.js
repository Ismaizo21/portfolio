// Sélection du formulaire et de l'élément pour afficher le message
const form = document.querySelector("form");
const messageContainer = document.createElement("div");
messageContainer.style.marginTop = "20px";
messageContainer.style.textAlign = "center";
messageContainer.style.color = "#2ecc71"; // Couleur verte pour le succès
form.parentNode.insertBefore(messageContainer, form.nextSibling);

// Ajout d'un écouteur d'événement pour la soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Affiche un message de succès dans la page
  messageContainer.textContent = "Message envoyé avec succès !";

  // Réinitialise le formulaire (optionnel)
  form.reset();

  // Supprime le message après 3 secondes
  setTimeout(() => {
    messageContainer.textContent = "";
  }, 3000);
});
