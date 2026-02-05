const WHATSAPP_NUMBER = '919718910662'; // Change to your WhatsApp number without +

  let cart = [];
  const products = [
    {id:1,title:'lahenga choli',price:10,description:'Sahaj creation lahenga choli',image:'https://i.etsystatic.com/61421801/r/il/0e0977/7153357145/il_fullxfull.7153357145_cq58.jpg'},
    {id:2,title:'Samsung Galaxy S23 5G',price:699,description:'Dynamic AMOLED 2X, Snapdragon 8 Gen 2',image:'https://images-cdn.ubuy.co.in/6604193ee20b1622b516efcd-samsung-galaxy-s23-5g-sm-s911b-ds-128gb.jpg'},
    {id:3,title:'Women Lehenga',price:6,description:'Embroidered Lehenga For Women,Designer Lehenga Choli Charvi Refined Women Lehenga',image:'https://images.meesho.com/images/products/589933159/rdkan_512.avif?width=512'},
    {id:4,title:'Jodhpuri Suit',price:190,description:'Black,Jodhpuri Suit,Hand Embroidery',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqPtGNZo4MASlVtyPsjtlZihj2rF-sJesTg&s'},
    {id:5,title:'Samsung Galaxy A15 5G',price:168,description:'6.5 inch Super AMOLED, fast charging',image:'https://technoor.me/wp-content/uploads/2024/05/a15blk.jpeg'},
    {id:6,title:'Gucci leather shoulder bag',price:2300,description:'GG Marmont leather shoulder bag',image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTx0racsIPzvYkf5-uL65L3HgQ2Wt5b60xPI4BxBU8aDnier7qWuFEaozhNOgWebQypCpIl1MAb1YNS4luXhVRwenL0KhFILIUkLdIDZddbgLlTlWF8LABj'},
    {id:7,title:'Samsung Galaxy Tab A9+',price:199,description:'11.0 inch with Wi-Fi+5G Tablet',image:'https://m.media-amazon.com/images/I/61J1NUF2sKL.jpg'},
    {id:8,title:'Banarasi Handloom Saree',price:300,description:'Pure Banarasi Handloom Katan Silk Meenakari Saree- Handmade',image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMgWYLa7j-GBsdsneWvVu9siXj96rGjocLH1QH4TXOiXsFWSw-2p9E0JehqpCfKiu0AN85qpnkFkpS36jbQsnA-cJevYHwzx-ZE8U9yHXNs-Qf4C1i6dEB'},
    {id:9,title:'iPhone 16 Pro Max',price:1500,description:'A18 Pro Chip, 6 Core Processor',image:'https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/b/f/5/-original-imahggexm5yafhez.jpeg?q=90'},
    {id:10,title:'Oppo K13 Turbo 5G',price:281,description:'6.8 inch FHD+ Display, Dimensity 8450',image:'https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/3/4/m/-original-imahewfsz5y8tekm.jpeg?q=90'},
    {id:11,title:'Samsung Galaxy S24 Ultra',price:901,description:'6.2 inch Display, 8 Gen 3 Processor',image:'https://www.myg.in/images/thumbnails/300/300/detailed/74/1_koh3-3z-removebg-preview.png.png'},
    {id:12,title:'Samsung Galaxy Tab S9 FE+',price:563,description:'12.4 Inch WQXGA Display, Exynos 1380',image:'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x616bzaainu/gallery/in-galaxy-tab-s9-fe-plus-sm-x616-sm-x616bzaainu-thumb-538493199'},
    {id:13,title:'Giuseppe Zanotti ',price:565,description:'Talon metallic low-top sneakers',image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQy104pfL36eJWqJ-w46YlNjrW2Dj45fmVgD0mmlEpBfT5jWjugGA0qEnUn29dt8hlUfjMqF7MMjhv75TxEz3Jyy5hguI21_RLgu79pJj4WpPaZZRHY0i8dkg'},
    {id:14,title:'iPhone 17',price:957,description:'6.3 inch Super Retina XDR Display',image:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUlmWnJkM2NiV2hVVVF2ZE1VdGpQZWhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHRlLys5ZkozSXJXZWZXNk8rZDF5S0V3&traceId=1'},
    {id:15,title:'Blue Bootcut Jeans',price:36,description:'Men Lightly Washed Bert Bootcut Fit Jeans',image:'https://assets-jiocdn.ajio.com/medias/sys_master/root/20250128/enkF/6798c007bc78b543a901c7f1/-473Wx593H-443056504-darkblue-MODEL.jpg'},
    {id:16,title:'Men Stylish Shirt',price:18,description:'BE ACTIVE Men Solid Slim Fit Cotton Casual Shirt ',image:'https://m.media-amazon.com/images/I/516Oh8c29fL._SY741_.jpg'},
    {id:17,title:'Black Jodhpuri Suit',price:218,description:'Sophisticated Black Jodhpuri Set with Embroidered Jacket',image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGmY2useUU789G7JK38YF3pdQ3NDo37VOw2wpWpVzXYyyBQx2i-sBYh0FfVdyQa4R2bbuyfukcIUH2t7eI_5tedCVKpt1lAUEkJd590_Sv'},
    {id:18,title:'Saree mall',price:11,description:'Women Net Embellished Party Wear Sare',image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlzwqItHsDAY3780Q6I79kSnQdeFpPWqJnA2xZfWFvm7GCxgR3uhdcElZ6a1PXVJuji5JHGu1vYtt1kTBxjBmDUzeg0qKgFpk1cgYyoJzsOntJzgu0NXou'},
    {id:19,title:'Oppo Enco W11 ETI41',price:18,description:'TWS Earbuds with Noise Cancellation',image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTS9577wxt7PEi_QWfYm_Rdei0WU1UeT2BT0Tm-kCLQTmOeRrPIJkZ5NUszlke6qRnu7ScQvf7WrylX9F79D5i22OwOcBkGOlvIvaAz7GBI'},
    {id:20,title:'Oppo Enco W11 ETI41',price:18,description:'TWS Earbuds with Noise Cancellation',image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_LwY5DfFAnjMN3Ly9S4T8wbzPB8UuHgQDc52O7aOZtC0BlbF18vRvJj46pTtpwgMqaq9F3tdQNostOOylQt3bcP70rW5xv5_RGXmU92swHQW6jtFxTGUx-0oq'},  
  ];

  const productsEl = document.getElementById('products');
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const btnBuy = document.getElementById('btn-buy');
  const btnClearCart = document.getElementById('btn-clear-cart');
  const searchContainer = document.getElementById('search-container');
  const searchInput = document.getElementById('search-input');

  const adminModal = document.getElementById('admin-modal');
  const adminBtn = document.getElementById('btn-open-admin');
  const adminCloseBtn = document.getElementById('admin-close');
  const adminListEl = document.getElementById('admin-list');
  const adminRefreshBtn = document.getElementById('admin-refresh');
  const adminFilterBtn = document.getElementById('admin-filter-btn');
  const adminFilterPhoneInput = document.getElementById('admin-filter-phone');
  const downloadJsonBtn = document.getElementById('download-json');
  const clearOrdersBtn = document.getElementById('clear-orders');

  const orderModal = document.getElementById('order-modal');
  const orderSummaryEl = document.getElementById('order-summary');
  const inputName = document.getElementById('input-name');
  const inputPhone = document.getElementById('input-phone');
  const inputAddress = document.getElementById('input-address');
  const inputDelivery = document.getElementById('input-delivery');
  const inputOther = document.getElementById('input-other');
  const inputOtherRow = document.getElementById('other-row');
  const inputInstr = document.getElementById('input-instr');
  const orderCancelBtn = document.getElementById('order-cancel');
  const orderSubmitBtn = document.getElementById('order-submit');

  function formatCurrency(num) {
    return '$' + Number(num).toFixed(2);
  }

  function findProductById(id) {
    return products.find(p => p.id === id);
  }

  function showToast(msg) {
    const div = document.createElement('div');
    div.textContent = msg;
    div.style.position = 'fixed';
    div.style.bottom = '70px';
    div.style.right = '20px';
    div.style.background = 'black';
    div.style.color = 'gold';
    div.style.padding = '10px 14px';
    div.style.borderRadius = '8px';
    div.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    div.style.zIndex = 10000;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }

  function loadSavedOrders() {
    const raw = localStorage.getItem('demo_store_orders') || '[]';
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }
  function saveOrders(orders) {
    localStorage.setItem('demo_store_orders', JSON.stringify(orders));
  }
  function addOrder(order) {
    const orders = loadSavedOrders();
    orders.push(order);
    saveOrders(orders);
  }
  function clearSavedOrders() {
    localStorage.removeItem('demo_store_orders');
  }

  function populateAdminList() {
    const allOrders = loadSavedOrders().reverse();
    const filterPhone = adminFilterPhoneInput.value.trim();
    const filtered = filterPhone ? allOrders.filter(o => o.phone.includes(filterPhone)) : allOrders;
    adminListEl.innerHTML = '';
    if (filtered.length === 0) {
      adminListEl.innerHTML = '<div class="small">No orders found.</div>';
      return;
    }
    filtered.forEach(o => {
      const wrapper = document.createElement('div');
      wrapper.style.borderBottom = '1px solid #f3f4f6';
      wrapper.style.padding = '10px 0';
      wrapper.innerHTML = `
        <div style="display:flex; justify-content:space-between; gap:12px; align-items:center;">
          <div>
            <div style="font-weight:800">${o.customerName} • <span style="color:#374151">${o.phone}</span></div>
            <div class="small">${o.address} • ${o.delivery}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:800; color:var(--primary)">${formatCurrency(o.total)}</div>
            <div class="small">${new Date(o.time).toLocaleString()}</div>
          </div>
        </div>
        <div style="margin-top:8px; padding-left:8px;">
          <div style="font-weight:700; margin-bottom:6px;">Items:</div>
          <ul style="margin:0;padding-left:18px">
            ${o.items.map(it => `<li>${it.title} — Qty: ${it.quantity} — ${formatCurrency(it.subtotal)}</li>`).join('')}
          </ul>
        </div>
        <div style="margin-top:8px;" class="small"><strong>Instructions:</strong> ${o.instructions || 'None'}</div>
      `;
      adminListEl.appendChild(wrapper);
    });
  }

  function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.bottom-nav button').forEach(b => b.classList.remove('active'));
  if (page === 'home') {
    document.getElementById('homePage').classList.add('active');
    document.getElementById('homeBtn').classList.add('active');
  } else if (page === 'cart') {
    document.getElementById('cartPage').classList.add('active');
    document.getElementById('cartBtn').classList.add('active');
  } else if (page === 'collection') {
    document.getElementById('collectionPage').classList.add('active');
    document.getElementById('collectionBtn').classList.add('active');
  }
}


  function renderProducts(filter = '') {
    productsEl.innerHTML = '';
    const lower = filter.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(lower) || p.description.toLowerCase().includes(lower));
    if (!filtered.length) {
      productsEl.innerHTML = '<div style="grid-column: 1 / -1; text-align:center; color: var(--muted);">No products found.</div>';
      return;
    }
    filtered.forEach(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.title}" />
        <h3>${p.title}</h3>
        <div class="price">${formatCurrency(p.price)}</div>
        <div class="desc">${p.description}</div>
        <div class="actions">
          <input type="number" class="qty" id="qty-${p.id}" min="1" value="1" />
          <button class="btn" data-id="${p.id}">Add to Cart</button>
        </div>
      `;
      productsEl.appendChild(div);
    });
  }

  const scrollBtn = document.getElementById('scroll-to-top');
const productsSection = document.getElementById('productssection');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});


   function showPopup() {
    document.getElementById("luxova-popup").style.display = "flex";
  }
  function closePopup() {
    document.getElementById("luxova-popup").style.display = "none";
  }

  setTimeout(showPopup, 1000);

  function showOffer() {
    document.getElementById("offer-popup").style.right = "0";
  }
  function closeOffer() {
    document.getElementById("offer-popup").style.right = "-320px";
  }
  setTimeout(showOffer, 5000);

  function renderCart() {
    cartItemsEl.innerHTML = '';
    if (cart.length === 0) {
      cartItemsEl.innerHTML = '<div class="small">Your cart is empty.</div>';
      cartTotalEl.textContent = 'Total: $0.00';
      btnBuy.disabled = true;
      return;
    }
    let total = 0;
    cart.forEach(item => {
      const p = findProductById(item.id);
      const sub = p.price * item.quantity;
      total += sub;
      const row = document.createElement('div');
      row.className = 'cart-row';
      row.innerHTML = `
        <img src="${p.image}" />
        <div class="cart-name">${p.title}</div>
        <div class="cart-qty">Qty: ${item.quantity}</div>
        <div class="cart-price">${formatCurrency(sub)}</div>
      `;
      cartItemsEl.appendChild(row);
    });
    cartTotalEl.textContent = `Total: ${formatCurrency(total)}`;
    btnBuy.disabled = false;
  }

  function toggleSearch() {
    if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
      searchContainer.style.display = 'block';
      showPage('home');
      searchInput.focus();
      searchInput.value = '';
      renderProducts();
    } else {
      searchContainer.style.display = 'none';
      searchInput.value = '';
      renderProducts();
    }
  }

  searchInput.addEventListener('input', e => {
    renderProducts(e.target.value);
  });

  productsEl.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON' && e.target.dataset.id) {
    const id = Number(e.target.dataset.id);
    const qtyInput = document.getElementById('qty-' + id);
    let qty = parseInt(qtyInput.value) || 1;
    const existing = cart.find(c => c.id === id);
    if (existing) existing.quantity += qty;
    else cart.push({ id, quantity: qty });
    renderCart();
    qtyInput.value = 1;
    showToast('Item added to cart!');
    // Remove or comment out the next line:
    // showPage('cart');
    if (searchContainer.style.display === 'block') {
      searchContainer.style.display = 'none';
      searchInput.value = '';
    }
  }
});


  btnClearCart.addEventListener('click', () => {
    if (!confirm('Clear cart?')) return;
    cart = [];
    renderCart();
  });

  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.bottom-nav button').forEach(b => b.classList.remove('active'));
    if (page === 'home') {
      document.getElementById('homePage').classList.add('active');
      document.getElementById('homeBtn').classList.add('active');
    } else if (page === 'cart') {
      document.getElementById('cartPage').classList.add('active');
      document.getElementById('cartBtn').classList.add('active');
      if (searchContainer.style.display === 'block') {
        searchContainer.style.display = 'none';
        searchInput.value = '';
      }
    }
  }

  btnBuy.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Cart is empty.');
      return;
    }
    populateOrderSummary();
    orderModal.style.display = 'flex';
  });

  // Close button inside product modal
document.getElementById('modal-close-btn').addEventListener('click', () => {
  document.getElementById('product-modal').style.display = 'none';
});


  orderCancelBtn.addEventListener('click', () => {
    orderModal.style.display = 'none';
  });

  inputDelivery.addEventListener('change', () => {
    inputOtherRow.style.display = inputDelivery.value === 'Other' ? 'block' : 'none';
  });

  function populateOrderSummary() {
    let html = '<strong>Items</strong><ul style="padding-left:18px;margin:8px 0;">';
    let total = 0;
    cart.forEach(item => {
      const p = findProductById(item.id);
      const sub = p.price * item.quantity;
      total += sub;
      html += `<li>${p.title} — Qty: ${item.quantity} — ${formatCurrency(sub)}</li>`;
    });
    html += `</ul><div><strong>Total: ${formatCurrency(total)}</strong></div>`;
    orderSummaryEl.innerHTML = html;
  }

  orderSubmitBtn.addEventListener('click', () => {
    const name = inputName.value.trim();
    const phone = inputPhone.value.trim();
    const address = inputAddress.value.trim();
    const delivery = inputDelivery.value;
    const other = inputOther.value.trim();
    const instructions = inputInstr.value.trim();

    if (!name || !phone) {
      alert('Please enter your name and phone.');
      return;
    }
    if (cart.length === 0) {
      alert('Cart is empty.');
      return;
    }

    const now = new Date();
    let total = 0;
    const items = cart.map(item => {
      const p = findProductById(item.id);
      const sub = p.price * item.quantity;
      total += sub;
      return { id: p.id, title: p.title, quantity: item.quantity, price: p.price, subtotal: sub };
    });

    const orderObj = {
      id: 'ORD-' + Date.now(),
      customerName: name,
      phone,
      address,
      delivery: delivery + (delivery === 'Other' && other ? ` (${other})` : ''),
      instructions,
      items,
      total,
      time: now.toISOString()
    };

    // Save locally for admin panel
    addOrder(orderObj);

    // Prepare WhatsApp message
    let msg = `New Order Received:\nOrder ID: ${orderObj.id}\nTime: ${new Date(orderObj.time).toLocaleString()}\n\nCustomer:\nName: ${orderObj.customerName}\nPhone: ${orderObj.phone}\nAddress: ${orderObj.address}\nDelivery: ${orderObj.delivery}\nInstructions: ${orderObj.instructions || 'None'}\n\nItems:`;
    orderObj.items.forEach(it => {
      msg += `\n- ${it.title} (Qty: ${it.quantity}) = ${formatCurrency(it.subtotal)}`;
    });
    msg += `\n\nTotal: ${formatCurrency(orderObj.total)}\n\n(Received from demo web store)`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(waUrl, '_blank');

    // Clear cart and close order modal
    cart = [];
    renderCart();
    orderModal.style.display = 'none';
    inputName.value = '';
    inputPhone.value = '';
    inputAddress.value = '';
    inputInstr.value = '';
    inputOther.value = '';
    inputDelivery.value = 'Home';
    showToast('Order saved and WhatsApp opened!');
  });

  adminBtn.addEventListener('click', () => {
    populateAdminList();
    adminModal.style.display = 'flex';
  });
  adminCloseBtn.addEventListener('click', () => {
    adminModal.style.display = 'none';
  });

  adminRefreshBtn.addEventListener('click', populateAdminList);
  adminFilterBtn.addEventListener('click', populateAdminList);

  downloadJsonBtn.addEventListener('click', () => {
    const orders = loadSavedOrders();
    const blob = new Blob([JSON.stringify(orders, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  clearOrdersBtn.addEventListener('click', () => {
    if (!confirm('Delete all saved orders? This cannot be undone.')) return;
    clearSavedOrders();
    populateAdminList();
    alert('All orders cleared from localStorage.');
  });

  // Initialize all displays
  renderProducts();
  renderCart();

  // Close modals & search on Escape key
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.style.display = 'none');
      if (searchContainer.style.display === 'block') {
        searchContainer.style.display = 'none';
        searchInput.value = '';
      }
    }
  });
  const productModal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-product-title');
const modalImage = document.getElementById('modal-product-image');
const modalPrice = document.getElementById('modal-product-price');
const modalDesc = document.getElementById('modal-product-desc');
const modalQty = document.getElementById('modal-qty');
let modalProductId = null;

productsEl.addEventListener('click', e => {
  // Only handle card image, title, or description clicks
  const card = e.target.closest('.card');
  if (card) {
    // Find product id from an image or button within that card
    const img = card.querySelector('img');
    const name = card.querySelector('h3').textContent;
    const productObj = products.find(p => p.title === name);
    if (productObj) {
      modalProductId = productObj.id;
      modalTitle.textContent = productObj.title;
      modalImage.src = productObj.image;
      modalPrice.textContent = formatCurrency(productObj.price);
      modalDesc.textContent = productObj.description;
      modalQty.value = 1;
      productModal.style.display = 'flex';
    }
  }
});

// Modal controls
document.getElementById('modal-buy-now-btn').onclick = () => {
  if (!modalProductId) return;
  let qty = parseInt(modalQty.value) || 1;
  cart = [{ id: modalProductId, quantity: qty }]; // replace cart with just this product
  renderCart(); 
  productModal.style.display = 'none';
  populateOrderSummary(); // show order summary for checkout
  orderModal.style.display = 'flex';

};


document.getElementById('modal-add-cart-btn').onclick = () => {
  if (!modalProductId) return;
  let qty = parseInt(modalQty.value) || 1;
  const existing = cart.find(c => c.id === modalProductId);
  if (existing) existing.quantity += qty;
  else cart.push({ id: modalProductId, quantity: qty });
  renderCart();
  productModal.style.display = 'none';
  showToast('Item added to cart!');
  showPage('cart');
};

function hello(x)
    {
    x.classList.toggle("change")
    document.getElementById("panal").classList.toggle("active");
    }
    