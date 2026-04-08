import { fetchProductCatalog, fetchProductReviews , fetchSalesReport, type Product } from "./apiSimulator.js";

function handleApi(){
    fetchProductCatalog().then((productList)=>{
        console.log(productList);
        //iterate the product list using map 
        const reviewPromises = productList.map((product:Product) =>{
            return fetchProductReviews(product.id).then((result)=>{
                console.log(`Reviews of Product: ${product.name}`);
                console.log(result);
                return result;
            });
        });// this block of code initates the request to fetch the review of the each product and returns the array of promisses for each request
        return Promise.all(reviewPromises); // add the reviewpromises to wait until all the reviews or either resolved or rejected
    })
    .then((allReviews) =>{
        console.log("All reviews completed.");
       // console.log(allReviews);
        //now fetch the final report
        return fetchSalesReport();
    })
    .then((report)=>{
        console.log("Sales Report");
        console.log(report);
    })
}

handleApi();