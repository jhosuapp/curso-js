

fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(products => {
        
        products.sort(function (a, b) {

            return b.price - a.price;
          
        });

        const getContainerForProductos = document.querySelector('.list__products');

        products.forEach((data)=>{
            const createNameOfProduct = document.createElement('p');
            createNameOfProduct.textContent = data.price;
            getContainerForProductos.append(createNameOfProduct);
        });
    });