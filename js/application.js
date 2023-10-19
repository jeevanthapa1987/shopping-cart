$(document).ready(function() {
  // Update the total price and subtotal whenever quantity changes
 $('.quantity').on('input', function() {
     var price = parseFloat($(this).closest('tr').find('td:eq(1)').text().replace('$', ''));
     var quantity = parseInt($(this).val());
     var total = price * quantity;
     $(this).closest('tr').find('.subtotal').text('$' + total.toFixed(2));

     recalculateCart();
 });

 // Remove item from cart
 $(document).on('click', '.remove', function() {
     $(this).closest('tr').remove();
     recalculateCart();
 });

 // Add new item to the cart
 $('#add').click(function() {
     var newItem = $('<tr>' +
         '<td>' +
         '<img src="vegetable6.jpg" alt="Vegetable 6" class="vegetable-img">' +
         'New Item</td>' +
         '<td>$10.00</td>' +
         '<td><input type="number" class="quantity" value="1"></td>' +
         '<td class="subtotal">$10.00</td>' +
         '<td><button class="btn btn-danger remove">Remove</button></td>' +
         '</tr>');
     newItem.appendTo('tbody');
     recalculateCart();
 });

 function recalculateCart() {
     var cartTotal = 0;
     $('.subtotal').each(function() {
         cartTotal += parseFloat($(this).text().replace('$', ''));
     });

     $('#cartTotal').text('$' + cartTotal.toFixed(2));
 }
});