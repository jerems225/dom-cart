var cart = [
    {
        poductRef: '#gcjmgdkylky',
        productName: 'iphone 13',
        productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204',
        productSize: 'l',
        productColor: 'gris',
        productQte: 3,
        productPrice: 499,
        totalPrice: function () {
            return this.productPrice * this.productQte;
        }
    },
    {
        poductRef: '#gstrghbijnnj',
        productName: 'iphone 14',
        productImage : 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13/Pink/Apple-iPhone-13-Pink-frontimage.png',
        productSize: 'xl',
        productColor: 'blanc',
        productQte: 3,
        productPrice: 1000,
        totalPrice: function () {
            return this.productPrice * this.productQte;
        }
    }
]

var createItemHTML = (item) => {
    var cartItems = document.querySelector('.cart-items');
    //creation de card
    var card = document.createElement('div');
    card.className = 'card rounded-3 mb-4'
    card.id = item.productRef;
    cartItems.appendChild(card);
    //creation de cardBody
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body p-4';
    card.appendChild(cardBody)
    //creation de row
    var row = document.createElement('div');
    row.className = 'row d-flex justify-content-between align-items-center';
    cardBody.appendChild(row);
    //creation de col image
    var colImage = document.createElement('div');
    colImage.className = 'col-md-2 col-lg-2 col-xl-2';
    //creation de productImage
    var productImage = document.createElement('img');
    productImage.className = 'img-fluid rounded-3';
    productImage.src = item.productImage;
    colImage.appendChild(productImage);
    row.appendChild(colImage);
    //creation de col text
    var colText = document.createElement('div');
    colText.className = 'col-md-3 col-lg-3 col-xl-3';
    colText.innerHTML = `<p class="lead fw-normal mb-2">${item.productName}</p>
                            <p><span class="text-muted">Size: </span>${item.productSize}
                                <span class="text-muted">Color:</span>${item.productColor}
                            </p>`;
    row.appendChild(colText);
    //creation de l'element quantite
    var colQte = document.createElement('div');
    colQte.className = 'col-md-3 col-lg-3 col-xl-2 d-flex'
    //creation du bouton moins
    var btnMinus = document.createElement('button')
    btnMinus.className = 'btn btn-link px-2'
    btnMinus.innerHTML = `<i class="fas fa-minus"></i>`
    btnMinus.addEventListener('click', function () {
        var input = this.parentNode.querySelector('input[type=number]');
        if (input) {
            input.stepDown();
        }
    })
    //creation de inputQte
    var inputQte = document.createElement('input');
    inputQte.name = 'quantity';
    inputQte.id = 'form1';
    inputQte.min = 1;
    inputQte.value = item.productQte;
    inputQte.type = 'number';
    inputQte.className = 'form-control form-control-sm';
    //creation de btnPlus
    var btnPlus = document.createElement('button');
    btnPlus.className = 'btn btn-link px-2';
    btnPlus.innerHTML = ` <i class="fas fa-plus"></i>`;
    btnPlus.addEventListener('click', function () {
        var input = this.parentNode.querySelector('input[type=number]');
        if (input) {
            input.stepUp();
        }
    })
    colQte.appendChild(btnMinus);
    colQte.appendChild(inputQte);
    colQte.appendChild(btnPlus);
    row.appendChild(colQte);
    //creation de colTotalPrice
    var colTotalPrice = document.createElement('div');
    colTotalPrice.className = 'col-md-3 col-lg-2 col-xl-2 offset-lg-1'
    colTotalPrice.innerHTML = `<h5 class="mb-0">$${item.totalPrice()}</h5>`;
    row.appendChild(colTotalPrice);
    //creation de iconTrash
    var iconTrash = document.createElement('div');
    iconTrash.className = 'col-md-1 col-lg-1 col-xl-1 text-end';
    iconTrash.id = item.productRef;
    iconTrash.addEventListener('click', function removeItem(item){
        var product = document.getElementById(item.productRef);

        product.remove();
    });
    iconTrash.innerHTML = `<a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>`;
    row.appendChild(iconTrash)
}

var createItems = () => {
    cart.map((item) => {
        createItemHTML(item)
    })
}
createItems()


