// Ottieni il riferimento al form di ricerca
const searchForm = document.getElementById('search-form');

// Aggiungi l'evento di submit al form
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita il comportamento predefinito di invio del modulo

  // Ottieni il valore inserito dall'utente nella categoria di ricerca
  const category = document.getElementById('category').value;

  // Effettua il reindirizzamento in base alla categoria
  if (category.toLowerCase() === 'alimentazione') {
    window.location.href = 'alimentazione.html'; // Reindirizza alla pagina "alimentazione.html"
  } else if (category.toLowerCase() === 'vegan') {
    window.location.href = 'vegan.html'; // Reindirizza alla pagina "vegan.html"
  } else if (category.toLowerCase() === 'vitamine') {
    window.location.href = 'vitamine.html'; // Reindirizza alla pagina "vitamine.html"
  } else {
    alert('Categoria non valida.'); // Messaggio di avviso se la categoria non corrisponde a nessuna pagina
  }
});
