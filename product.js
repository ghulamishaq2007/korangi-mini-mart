// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click',()=>{
    item.classList.toggle('active');
    const ans = item.querySelector('.faq-answer');
    if(ans.style.display==='block'){ans.style.display='none';}
    else{ans.style.display='block'}
  });
});







// Thumbnail click
const mainImage = document.getElementById('mainImage');
document.querySelectorAll('#thumbs .thumb img').forEach(img=>{
  img.addEventListener('click',()=>{
    mainImage.src = img.dataset.large || img.src;
    document.querySelectorAll('#thumbs .thumb').forEach(t=>t.classList.remove('active'));
    img.parentElement.classList.add('active');
  });
});

// Variant selection
document.getElementById('variants').addEventListener('click', e=>{
  const v = e.target.closest('.variant'); if(!v) return;
  document.querySelectorAll('#variants .variant').forEach(el=>el.classList.remove('active'));
  v.classList.add('active');
});

// Quantity buttons
document.getElementById('inc').addEventListener('click',()=>document.getElementById('qty').stepUp());
document.getElementById('dec').addEventListener('click',()=>document.getElementById('qty').stepDown());

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.querySelectorAll('[data-content]').forEach(c=>{
      c.style.display = (c.dataset.content===tab)?'block':'none';
    });
  });
});

// Cart
const product = {name:"Apple Green Tea", price:250};
document.querySelector('.btn.cart').addEventListener('click',()=>{
  let cart = JSON.parse(localStorage.getItem('korangiCart')||'[]');
  let existing = cart.find(i=>i.name===product.name);
  if(existing){existing.qty=(existing.qty||1)+1;}
  else{cart.push({...product, qty:1});}
  localStorage.setItem('korangiCart',JSON.stringify(cart));
  document.getElementById('count').innerText=cart.reduce((a,b)=>a+b.qty,0);
  
});
document.getElementById('count').innerText = JSON.parse(localStorage.getItem('korangiCart')||'[]').reduce((a,b)=>a+b.qty,0);