function searchProductByName(event) {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;

  if (productName.toLowerCase() === 'barrette') {
    window.location.href = 'dettaglio_barrette.html';
    return;
  } else if (productName.toLowerCase() === 'peanut butter') {
    window.location.href = 'dettaglio_peanutbutter.html';
    return;
  } else if (productName.toLowerCase() === 'peanut') {
    window.location.href = 'dettaglio_peanutbutter.html';
    return;
  } else if (productName.toLowerCase() === 'butter') {
    window.location.href = 'dettaglio_peanutbutter.html';
    return;
  } else if (productName.toLowerCase() === 'burro di arachidi') {
    window.location.href = 'dettaglio_peanutbutter.html';
    return;
  } else if (productName.toLowerCase() === 'vegan protein cookie') {
    window.location.href = 'dettaglio_vegan1.html';
    return;
  } else if (productName.toLowerCase() === 'cookie') {
    window.location.href = 'dettaglio_vegan1.html';
    return;
  } else if (productName.toLowerCase() === 'protein cookie') {
    window.location.href = 'dettaglio_vegan1.html';
    return;
  } else if (productName.toLowerCase() === 'biscotti proteici') {
    window.location.href = 'dettaglio_vegan1.html';
    return;
  } else if (productName.toLowerCase() === 'biscotti') {
    window.location.href = 'dettaglio_vegan1.html';
    return;
  } else if (productName.toLowerCase() === 'patatine proteiche') {
    window.location.href = 'dettaglio_vegan2.html';
    return;
  } else if (productName.toLowerCase() === 'patatine') {
    window.location.href = 'dettaglio_vegan2.html';
    return;
  } else if (productName.toLowerCase() === 'zinco e magnesio') {
    window.location.href = 'dettaglio_zinco_magnesio.html';
    return;
  } else if (productName.toLowerCase() === 'zinco') {
    window.location.href = 'dettaglio_zinco_magnesio.html';
    return;
  } else if (productName.toLowerCase() === 'magnesio') {
    window.location.href = 'dettaglio_zinco_magnesio.html';
    return;
  } else if (productName.toLowerCase() === 'caramelle gommose multivitaminiche') {
    window.location.href = 'dettaglio_vitamine2.html';
    return;
  } else if (productName.toLowerCase() === 'caramelle gommose ') {
    window.location.href = 'dettaglio_vitamine2.html';
    return;
  } else if (productName.toLowerCase() === 'caramelle') {
    window.location.href = 'dettaglio_vitamine2.html';
    return;
  } else if (productName.toLowerCase() === 'caramelle multivitaminiche') {
    window.location.href = 'dettaglio_vitamine2.html';
    return;
  } else {
    alert('Prodotto non disponibile o non digitato correttamente.');
  }
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', searchProductByName);
