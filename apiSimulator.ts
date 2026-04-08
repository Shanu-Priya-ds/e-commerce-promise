/**
 * interface objects
 */
export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}

export interface ProductReview {
    id: number;
    comment: string;
    rating: number;
    createdAt: string;
    reviewer?: string;
}

interface productReviewResponse {
    productId: number;
    reviews: ProductReview[];
}

/**
 * sample response data
 */
//array of product list
let productList: Product[] = [ { id: 1, name: "Laptop", price: 1200 },
                               { id: 2, name: "Headphones", price: 200 }
                            ];
//array of productReview object for different products 
let prodReviewsObjs: productReviewResponse[] = [
    {
    "productId": 1,
    "reviews": [
                 { id: 1, reviewer: "Nimal", rating: 5, comment: "Amazing quality!", createdAt: "2024-03-01T10:00:00Z"},
                 { id: 2, reviewer: "Nishan", rating: 4, comment: "Good value for money.", createdAt: "2024-03-02T14:20:00Z"}
                ]
    },
    {
    "productId": 2,
    "reviews": [
                {id: 1, reviewer: "Nihi", rating: 5, comment: "Amazing quality!", createdAt: "2022-03-01T10:00:00Z"},
                {id: 2, reviewer: "Nithi", rating: 4, comment: "Good value for money.", createdAt: "2022-03-02T14:20:00Z"}
               ]
    }
];

let report:SalesReport = { totalSales: 100, averagePrice: 45, unitsSold: 50 };
               
/**
 * Simulation function to fetch the product lists
 * @returns Promise object with Arary of Product
 */
export const fetchProductCatalog = (): Promise<Product[]> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve(productList);
            } else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });

}

/**
 * Simulation function to fetch the array of productreview.
 * @param productId 
 * @returns Promise object with array of reviews for the @productId
 */
export const fetchProductReviews = (productId: number): Promise<ProductReview[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             if (Math.random() < 0.8) {
                if(productId){
                    let reviews:ProductReview[]=  getProductReviewsFromList(productId);
                    if(reviews!=null && !Array.isArray(reviews)){
                        reject(new DataError("Reviews must be returned in array."));
                    }
                    resolve(reviews);
                }else{
                     reject(new DataError("Product Id is empty"));
                }
            } else {
                reject(new NetworkError("Failed to fetch sales report."));
            }


        }, 1000);
    });
}

/**
 * Get the array of review from prodReviewsObjs 
 * @param productId 
 * @returns empty array or reviews array 
 */
function getProductReviewsFromList(productId: number) {
    let reviewObje = prodReviewsObjs.find((reviewObj) => productId === reviewObj.productId);
    let review: ProductReview[] = reviewObje ? reviewObje.reviews : [];
    return review;
}

// returns Promise with SalesReport Object or failure message.
export const fetchSalesReport = (): Promise<SalesReport> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                if(typeof (report.averagePrice)!=="number" || typeof (report.totalSales)!=="number" || typeof (report.unitsSold)!=="number"){
                    reject("Report values must be in numbers.")
                }
               resolve(report);
            } else {
                reject(new NetworkError("Failed to fetch sales report"));
            }
        });
    });
}

export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}