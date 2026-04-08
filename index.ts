import { fetchProductCatalog, fetchProductReviews , type Product } from "./apiSimulator.js";

function handleApi(){
    fetchProductCatalog().then((productList)=>{
        console.log(productList);
        //iterate the product list 
        productList.forEach((product:Product) =>{
            fetchProductReviews(product.id).then((result)=>{
                console.log(`Reviews of Product: ${product.name}`);
                console.log(result);
            })
        })
    });
}

handleApi();