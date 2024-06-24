<script>
function trackEventMatomo(eventName, eventCategory, eventAction, eventLabel) {
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackEvent', eventCategory, eventAction, eventLabel]);
}
function trackEventGA4(eventCategory, eventAction, eventLabel) {
  gtag('event', eventAction, {
    'event_category': eventCategory,
    'event_label': eventLabel
  });
}
function trackEvent(eventName, eventCategory, eventAction, eventLabel) {
  trackEventMatomo(eventName, eventCategory, eventAction, eventLabel);
  trackEventGA4(eventCategory, eventAction, eventLabel);
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
  trackEvent('conversion', 'ibe', 'buchung', 'buchung');
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackEcommerceOrder', e.detail.transaction_id, e.detail.value, null, null, null, false]);
  
  gtag('event', 'purchase', {
    'transaction_id': e.detail.transaction_id,
    'value': e.detail.value,
    'currency': 'EUR'
  });
});
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXX"></script>
<script>
window.addEventListener('conversion', function(e) {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXX');
  gtag('event', 'conversion', {'send_to':'AW-XXXXX/YYYYY','value':e.detail.value,'currency':'EUR'});
});
</script>
