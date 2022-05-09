
const getContainerForProductos = document.querySelector('.list__products');
const getContainerForProduct = document.querySelector('.product');
const getContainerForCategories = document.querySelector('.categories');

getProducts()
    .then(data => data.json())
    .then(products => {
        productos(products);

        return getProduct()
    })
    .then(dataProduct => dataProduct.json())
    .then(dataLast =>{
        producto(dataLast);

        return getCategories()  
    })
    .then(dataCategories => dataCategories.json())
    .then(dataCategoriesLast =>{
        categories(dataCategoriesLast);

    })
    .catch(error =>{
        console.log(error);
    });


function getProducts(){
    return fetch('https://fakestoreapi.com/products')
}

function getProduct(){
    return fetch('https://fakestoreapi.com/products/1')
}
function getCategories(){
    return fetch('https://fakestoredsapi.com/products/categories');
}


function productos(productos){
    productos.forEach((data)=>{
        const createNameOfProduct = document.createElement('p');
        createNameOfProduct.textContent = data.title;
        getContainerForProductos.append(createNameOfProduct);

        const createImageProduct = document.createElement('img');
        createImageProduct.classList.add('image__product');
        createImageProduct.src = data.image;
        getContainerForProductos.append(createImageProduct);


        document.querySelector('.loader').style.display = "none";
    });
}


function producto(oneproduct){
    const createAimage = document.createElement('img');
    createAimage.src = oneproduct.image;
    getContainerForProduct.append(createAimage);
}

function categories(categoriesProduct){
    categoriesProduct.forEach((data, indice)=>{
        const createElementForCategories = document.createElement('p');
        createElementForCategories.textContent = data;
        getContainerForCategories.append(createElementForCategories);
    });
}


data = [
    {
       edad:2, name: "Juan", lastUpdated: "2018/01/01"
    }, 
    {
       edad:3, name: "José", lastUpdated: "2014/01/01"
    },
    {
       edad:1, name: "María", lastUpdated: "2016/07/01"
    }
 ]

 data.sort(function (a, b) {

    return a.edad - b.edad;
  
  });


data.forEach((data)=>{
    console.log(data);
})