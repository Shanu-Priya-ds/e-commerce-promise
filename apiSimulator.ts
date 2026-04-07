interface product {
    id:number;
    name:string;
    price:number;
}

interface SalesReport {
    totalSales:number;
    unitsSold:number;
    averagePrice:number;
}

export const fetchProductCatalog = (): Promise<product[]> => {

return new Promise((resolve, reject)=>{
setTimeout(()=>{
    if(Math.random()<0.8){
        resolve([{id:1,name:"Laptop", price: 1200},
            {id:2, name:"Headphones",price:200}
        ]);
    }else{
        reject("Failed to fetch product catalog");
    }
},1000);

});
   
}

export const fetchProductReviews = (productId: number):Promise<string[]> =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(productId){
                resolve(["Best Product ever purchased ","It works as described in the deacription."]);
            }else{
                reject("Failed to fetch sales report.");
            }

            
        },1000);
    });
}

export const fetchSalesReport = ():Promise<SalesReport> =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(Math.random()<0.8){
            resolve({totalSales:100, averagePrice:45,unitsSold:50});
            }else{
                reject("Failed to ferch sales report");
            }
        });
    });

}