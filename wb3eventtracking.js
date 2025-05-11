<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXX"></script>
<script>
  window._paq = window._paq || [];
  window.gtag = window.gtag || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZZZZZZ'); // Google Analytics 4 Mess-ID

  function trackEvent(eventName, eventCategory, eventAction, eventLabel, eventParams = {}) {
    _paq.push(['trackEvent', eventCategory, eventAction, eventLabel]);
    gtag('event', eventName, {'event_category': eventCategory, 'event_label': eventLabel, ...eventParams});
  }

  window.addEventListener('arrival_departure_date', function() {
    trackEvent('view_item_list', 'ibe', 'arrival_departure_date', 'interesse');
  });

  window.addEventListener('viewed_room', function(e) {
    // Annahme: e.detail enthält Informationen zum angezeigten Zimmer (z.B. item_id, item_name)
    trackEvent('select_item', 'ibe', 'viewed_room', 'interesse', {
      items: [{
        item_id: e.detail.item_id,
        item_name: e.detail.item_name
      }]
    });
  });

  window.addEventListener('viewed_room_detail', function(e) {
    // Annahme: e.detail enthält detaillierte Informationen zum angezeigten Zimmer (siehe PDF)
    trackEvent('view_item', 'ibe', 'viewed_room_detail', 'interesse', {
      items: [{
        item_id: e.detail.item_id,
        item_name: e.detail.item_name,
        item_brand: e.detail.item_brand,
        item_category: e.detail.item_category,
        price: e.detail.price
      }]
    });
  });

  window.addEventListener('add_rate_to_cart', function(e) {
    // Annahme: e.detail enthält Informationen zur hinzugefügten Rate (siehe PDF)
    trackEvent('add_to_cart', 'ibe', 'add_rate_to_cart', 'interesse', {
      items: [{
        item_id: e.detail.item_id,
        item_name: e.detail.item_name,
        item_brand: e.detail.item_brand,
        item_category: e.detail.item_category,
        price: e.detail.price,
        quantity: 1 // In der Regel wird eine Rate einmal hinzugefügt
      }]
    });
  });

  // Möglicher neuer Schritt: Entfernen aus dem Warenkorb
  window.addEventListener('remove_rate_from_cart', function(e) {
    // Annahme: e.detail enthält Informationen zur entfernten Rate (ähnlich add_rate_to_cart)
    trackEvent('remove_from_cart', 'ibe', 'remove_rate_from_cart', 'interesse', {
      items: [{
        item_id: e.detail.item_id,
        item_name: e.detail.item_name,
        price: e.detail.price,
        quantity: 1
      }]
    });
  });

  // Möglicher neuer Schritt: Beginn des Buchungsprozesses (Checkout)
  window.addEventListener('begin_checkout', function(e) {
    // Annahme: e.detail enthält Informationen zum Warenkorb (z.B. value, items)
    trackEvent('begin_checkout', 'ibe', 'checkout', 'interesse', {
      value: e.detail.value,
      currency: 'EUR',
      items: e.detail.items
    });
  });

  window.addEventListener('conversion_e', function(e) { // Umbenannt, um dem PDF zu entsprechen
    trackEvent('conversion', 'ibe', 'buchung', 'buchung', {
      transaction_id: e.detail.transaction_id,
      value: e.detail.value,
      currency: e.detail.currency,
      tax: e.detail.tax,
      coupon: e.detail.coupon,
      items: e.detail.ecommerce.items // Übernimmt die detaillierten Artikelinformationen
    });

    // Matomo E-Commerce Tracking
    _paq.push(['trackEcommerceOrder',
      e.detail.ecommerce.transaction_id,
      e.detail.ecommerce.value,
      e.detail.ecommerce.tax,
      null, // Versandkosten (in der Regel nicht relevant für Hotelbuchungen)
      null, // Rabatt
      false // Keine Artikeldetails übergeben, da trackEvent dies für GA4 übernimmt
    ]);

    // Google Ads Conversion Tracking (bleibt unverändert)
    gtag('event', 'purchase', {
      'transaction_id': e.detail.ecommerce.transaction_id,
      'value': e.detail.ecommerce.value,
      'currency': e.detail.ecommerce.currency,
      'items': e.detail.ecommerce.items // Übergabe der detaillierten Artikelinformationen
    });
    gtag('config', 'AW-XXXXXXX');
    gtag('event', 'conversion', {'send_to':'AW-XXXXXXX/YYYYYYY','value':e.detail.ecommerce.value,'currency':e.detail.ecommerce.currency});
  });
</script>
