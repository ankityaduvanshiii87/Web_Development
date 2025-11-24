// Q2 jQuery logic:
// - Use event delegation to handle clicks and hovers on product container.
// - Show details on hover, toggle favourite class on button click,
// - Use attribute selector to style discounted items, and alert if out of stock.

$(function() {
  var $products = $('#products');

  $products.on('click', '.product', function(e) {
    $(this).toggleClass('highlight');
    var stock = Number($(this).attr('data-stock') || 0);
    if (stock === 0) {
      alert('Product out of stock!');
      $(this).addClass('out');
    }
  });

  $products.on('mouseenter', '.product', function() {
    $(this).find('.details').show();
  }).on('mouseleave', '.product', function() {
    $(this).find('.details').hide();
  });

  $products.on('click', '.fav', function(e) {
    e.stopPropagation();
    $(this).closest('.product').toggleClass('selected');
  });

  // style discounted items
  $('[data-discount]').addClass('discount');
});
