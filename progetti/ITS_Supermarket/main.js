// Ottieni il riferimento al form
const reviewForm = document.getElementById('review-form');

// Aggiungi l'evento di submit al form
reviewForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita il comportamento predefinito di invio del modulo

  // Ottieni i valori inseriti dall'utente
  const rating = document.getElementById('rating').value;
  const review = document.getElementById('review').value;

  // Crea un oggetto recensione con i dati inseriti
  const newReview = {
    rating: parseInt(rating),
    review: review
  };

  // Salvataggio delle recensioni nel Local Storage
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(newReview);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  // Resetta il form
  reviewForm.reset();

  // Messaggio di conferma
  alert('Recensione salvata con successo!');
});
// Funzione per leggere i dati delle valutazioni dal local storage e calcolare le statistiche
function calculateRatingStatistics() {
    // Controlla se ci sono dati salvati nel local storage
    if (localStorage.getItem('reviews')) {
      // Ottieni i dati delle valutazioni dal local storage
      const reviews = JSON.parse(localStorage.getItem('reviews'));
  
      // Calcola il numero totale di valutazioni
      const totalReviews = reviews.length;
  
      // Calcola la somma delle valutazioni
      let totalRating = 0;
      for (let i = 0; i < totalReviews; i++) {
        totalRating += reviews[i].rating;
      }
  
      // Calcola la valutazione media
      const averageRating = totalRating / totalReviews;
  
      // Restituisci i risultati
      return {
        totalReviews,
        averageRating,
      };
    } else {
      // Non ci sono dati salvati, restituisci valori di default
      return {
        totalReviews: 0,
        averageRating: 0,
      };
    }
  }
  
  // Esempio di utilizzo della funzione
  const ratingStatistics = calculateRatingStatistics();
  
  // Accesso ai risultati
  const totalReviews = ratingStatistics.totalReviews;
  const averageRating = ratingStatistics.averageRating;
  
  // Esempio di visualizzazione dei risultati
  console.log('Numero totale di valutazioni:', totalReviews);
  console.log('Valutazione media:', averageRating);
  
  
