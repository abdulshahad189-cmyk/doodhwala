// script.js - mobile nav toggle and WhatsApp order helpers
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const navlinks = document.querySelector('.navlinks');

  if(toggle && navlinks){
    toggle.addEventListener('click', function(){
      navlinks.classList.toggle('show');
    });
  }

  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.navlinks a').forEach(a=>{
    a.addEventListener('click', ()=> navlinks.classList.remove('show'));
  });

  // WhatsApp ordering
  const WA_NUMBER = '919494976874'; // existing number (used as requested)

  function openWhatsApp(prefill){
    const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(prefill);
    window.open(url, '_blank', 'noopener');
  }

  // Attach to any .order-now links/buttons
  document.querySelectorAll('.order-now').forEach(el=>{
    el.addEventListener('click', function(e){
      e.preventDefault();
      const preset = el.getAttribute('data-message') || 'Hello, I would like to place an order.';
      openWhatsApp(preset);
    });
  });

  // Convert contact form into WhatsApp message
  const orderForm = document.getElementById('order-form');
  if(orderForm){
    orderForm.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(orderForm);
      const name = formData.get('name') || '';
      const phone = formData.get('phone') || '';
      const msg = formData.get('message') || '';
      const text = `Order from Doodh Wala\nName: ${name}\nPhone: ${phone}\nDetails: ${msg}`;
      openWhatsApp(text);
    });
  }
});
