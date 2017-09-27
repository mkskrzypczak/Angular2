import { Component } from "@angular/core";

@Component({
    selector:'app-products',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
    pageTitle:string = "Lista produktów";
    // products:any[]=[{
    //     "productId": 1,
    //     "productName": "Grabie",
    //     "productCode": "GDN-0011",
    //     "releaseDate": "19.03.2016",
    //     "description": "Grabie ogrodowe z drewnanym trzonkiem.",
    //     "price": 19.95,
    //     "starRating": 3.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // },
    // {
    //     "productId": 2,
    //     "productName": "Wózek ogrodowy",
    //     "productCode": "GDN-0023",
    //     "releaseDate": "18.03.2016",
    //     "description": "Wózek ogrodowy o pojemności 50 litrów",
    //     "price": 32.99,
    //     "starRating": 4.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    // },
    // {
    //     "productId": 5,
    //     "productName": "Młot",
    //     "productCode": "TBX-0048",
    //     "releaseDate": "21.05.2016",
    //     "description": "Stalowy młot",
    //     "price": 8.9,
    //     "starRating": 4.8,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    // }];
}