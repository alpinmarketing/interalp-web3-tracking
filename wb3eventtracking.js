<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXX"></script>
<script>
document.addEventListener('conversion', function () {
  // Google Ads
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXX');
  gtag('event', 'conversion', {'send_to': 'AW-XXXXXX/yyyyyy','transaction_id': ''});

 // Matomo
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackEvent', 'ibe', 'buchung', 'reservierung', cartSum]);
});
</script>
