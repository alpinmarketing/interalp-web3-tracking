<script>
function trackEvent(eventName, eventCategory, eventAction, eventLabel) {
  var _paq = window._paq = window._paq || [];
  var gtag = window.gtag = window.gtag || [];
  _paq.push(['trackEvent', eventCategory, eventAction, eventLabel]);
  gtag('event', eventName, {'event_category': eventCategory, 'event_label': eventLabel});
}
window.addEventListener('arrival_departure_date', function() {
  trackEvent('view_item_list', 'ibe', 'arrival_departure_date', 'interesse');
});
window.addEventListener('viewed_room', function() {
  trackEvent('select_item', 'ibe', 'viewed_room', 'interesse');
});
window.addEventListener('viewed_room_detail', function() {
  trackEvent('view_item', 'ibe', 'viewed_room_detail', 'interesse');
});
window.addEventListener('add_rate_to_cart', function() {
  trackEvent('add_to_cart', 'ibe', 'add_rate_to_cart', 'interesse');
});
window.addEventListener('conversion', function(e) {
  trackEvent('conversion', 'ibe', 'buchung', 'buchung');
  var _paq = window._paq = window._paq || [];
  var gtag = window.gtag = window.gtag || [];
  _paq.push(['trackEcommerceOrder', e.detail.transaction_id, e.detail.value, null, null, null, false]);
  gtag('config', 'G-ZZZZZZ'); // Google Analytics Mess-ID
  gtag('event', 'purchase', {'transaction_id': e.detail.transaction_id,'value': e.detail.value,'currency': 'EUR'});
  gtag('config', 'AW-XXXXXXX'); // Google Ads Tracking-ID
  gtag('event', 'conversion', {'send_to':'AW-XXXXXXX/YYYYYYY','value':e.detail.value,'currency':'EUR'});
});
</script>
