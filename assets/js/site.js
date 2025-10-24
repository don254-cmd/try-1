const SITE_INDEX = [{"item": "Itel S18", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Itel A33", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Itel P36", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Itel S17 Pro", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Itel A48", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Itel P55", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Itel Vision 1", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Tecno Spark 6", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Tecno Camon 16", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Tecno Pouvoir 4", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Tecno Phantom X", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Tecno Pop 5", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Tecno Pova 3", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Tecno Spark 7", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Samsung A10", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Samsung A12", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Samsung A21s", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Samsung S9", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Samsung S10", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Samsung Note 9", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Samsung M31", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Infinix Hot 10", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Nokia 2.4", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Huawei Y6", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Realme C11", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Xiaomi Redmi 9", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Motorola G8", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "Sony Xperia L4", "type": "MDM File", "page": "MDM Files", "price": "5"}, {"item": "UMT \u2013 1 year", "type": "Tool", "page": "Tools Activation", "price": "9000"}, {"item": "AMT \u2013 3 months", "type": "Tool", "page": "Tools Activation", "price": "1500"}, {"item": "AMT \u2013 1 year", "type": "Tool", "page": "Tools Activation", "price": "4000"}, {"item": "Pandora Online \u2013 1 year", "type": "Tool", "page": "Tools Activation", "price": "10000"}, {"item": "UnlockTool \u2013 1 year", "type": "Tool", "page": "Tools Activation", "price": "8000"}, {"item": "UnlockTool \u2013 3 months", "type": "Tool", "page": "Tools Activation", "price": "3600"}, {"item": "CM2 Renewal \u2013 1 year", "type": "Tool", "page": "Tools Activation", "price": "5000"}, {"item": "Tsm \u2013 1 year", "type": "Tool", "page": "Tools Activation", "price": "2913"}, {"item": "MDM Fix Tool \u2013 1 year", "type": "Tool", "page": "Tools Activation", "price": "7000"}, {"item": "MDM Fix Tool \u2013 8 months", "type": "Tool", "page": "Tools Activation", "price": "5000"}, {"item": "Mobile Software Course", "type": "Course", "page": "Courses", "price": "80"}, {"item": "ISP Masterclass", "type": "Course", "page": "Courses", "price": "100"}, {"item": "Professional Package", "type": "Course", "page": "Courses", "price": "150"}, {"item": "Remote Service (1hr)", "type": "Service", "page": "Other Services", "price": "20"}];

// Site-wide data index for search
const SITE_INDEX = [];
function addToIndex(item, type, page, price){
  SITE_INDEX.push({item,type,page,price});
}
let cart = [];
function addToCart(item, price){
  cart.push({item,price});
  document.getElementById('cartCount').innerText = cart.length;
  const el = document.createElement('div');
  el.innerText = item + " added to cart";
  setTimeout(()=>el.remove(),1200);
  alert(item + " added to cart!");
}
function checkout(){
  if(cart.length===0){ alert('Cart is empty'); return; }
  let total = 0; let msg = "Hello Zoom Tech,%0A%0AI want to order:%0A";
  cart.forEach(c=>{ msg += `• ${c.item} - ${c.price}%0A`; total += Number(c.price); });
  msg += `%0ATotal: ${total}%0AThank you!`;
  window.open(`https://wa.me/254795540536?text=${msg}`,'_blank');
}
function openSearch(){
  document.getElementById('searchModal').style.display='flex';
  document.getElementById('globalSearchInput').focus();
}
function closeSearch(){ document.getElementById('searchModal').style.display='none'; }
function globalSearch(){
  const q = document.getElementById('globalSearchInput').value.toLowerCase();
  const res = SITE_INDEX.filter(i=> (i.item+i.type).toLowerCase().includes(q));
  const container = document.getElementById('searchResults');
  container.innerHTML = '';
  if(res.length===0){ container.innerHTML = '<p class="small">No results</p>'; return; }
  res.forEach(r=>{
    const div = document.createElement('div');
    div.className='card';
    div.innerHTML = `<h4>${r.item}</h4><p class="small">${r.type} · ${r.page} · Price: ${r.price}</p>
    <button class="btn" onclick="addToCart('${r.item}','${r.price}')">Add to cart</button>`;
    container.appendChild(div);
  });
}
