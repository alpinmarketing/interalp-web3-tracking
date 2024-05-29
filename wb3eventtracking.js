<script>
// Track Interalp IBE Events with GA4, Matomo and Google Ads
document.addEventListener('conversion', function () {
  
  var adwordsidlabel = 'AW-xxxxxxxxxx/label';
  var gtag = window.gtag = window.gtag || [];
  var _paq = window._paq = window._paq || [];
  
  gtag('event', 'conversion', {'send_to': adwordsidlabel});
  _paq.push(['trackEvent', 'ibe', 'buchung', 'reservierung', _umsatz]);
  _paq.push(['trackEcommerceOrder', data.reservationId, _umsatz, null, null, null, false]);
  
});
</script>
