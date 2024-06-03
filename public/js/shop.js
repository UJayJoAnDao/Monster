async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        const button = document.createElement('button');
        button.textContent = 'Buy';
        button.onclick = () => buyProduct(product.id);

        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(button);

        productsContainer.appendChild(productDiv);
    });
}

async function buyProduct(productId) {
    const response = await fetch('http://localhost:3000/api/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product_id: productId })
    });

    const result = await response.json();
    alert(result.message);
}

fetchProducts();