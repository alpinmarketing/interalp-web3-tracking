<script>
function trackEvent(eventName, eventCategory, eventAction, eventLabel, eventValue = null) {
  var _paq = window._paq = window._paq || [];
  if (eventValue !== null) {
    _paq.push(['trackEvent', eventCategory, eventAction, eventLabel, eventValue]);
  } else {
    _paq.push(['trackEvent', eventCategory, eventAction, eventLabel]);
  }
}

window.addEventListener('arrival_departure_date', function() {
  trackEvent('arrival_departure_date', 'ibe', 'arrival_departure_date', 'interesse');
});
window.addEventListener('viewed_room', function() {
  trackEvent('viewed_room', 'ibe', 'viewed_room', 'interesse');
});
window.addEventListener('viewed_room_detail', function() {
  trackEvent('viewed_room_detail', 'ibe', 'viewed_room_detail', 'interesse');
});
window.addEventListener('add_rate_to_cart', function() {
  trackEvent('add_rate_to_cart', 'ibe', 'add_rate_to_cart', 'interesse');
});
window.addEventListener('conversion', function(e) {
  trackEvent('conversion', 'ibe', 'buchung', 'reservierung', e.detail.value);
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackEcommerceOrder', e.detail.transaction_id, e.detail.value, null, null, null, false]);
});
</script>
