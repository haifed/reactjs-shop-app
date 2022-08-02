import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosClient from "./AxiosClient";
import { history } from "../helpers/history";
import { BehaviorSubject } from "rxjs";


const CartService = {
  cart:[],

  ProductQuantity:new BehaviorSubject(0),
  ProductTotalPrice:new BehaviorSubject(0),

  ProductStore:new BehaviorSubject([]),


   getCart() {
    let savedcart = localStorage.getItem("cart");
    if (savedcart) {
      this.cart = JSON.parse(savedcart);
    }
    return this.cart;
  },

  saveCartToLocal() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  addToCart(item: any) {
    let index = this.cart.findIndex((i:any) => i.id === item.id);

    if (index === -1) {
      (this.cart as any).push({ ...item, quantity: 1 });
    } else {
      (this.cart as any)[index].quantity++;
    }

    this.saveCartToLocal();
    this.ProductStore.next(this.cart);

    this.ProductQuantity.next( (this.cart as any).reduce((acc:any, item:any) => acc + item.quantity, 0));
    this.ProductTotalPrice.next( (this.cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0)));
  },

  removeItem(item: any) {
    let index = this.cart.findIndex((i:any) => i.id === item.id);

    if (index !== -1) {
      if ( (this.cart as any)[index].quantity !== 0) {
        (this.cart as any)[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }

    this.saveCartToLocal();
    this.ProductStore.next(this.cart);

    this.ProductQuantity.next( (this.cart as any).reduce((acc:any, item:any) => acc + item.quantity, 0));
    this.ProductTotalPrice.next( (this.cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0)));
  },

  getTotalPrice() {
    return this.ProductTotalPrice.asObservable();
  },
  // getTotalPrice() {
  //   return this.cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);
  // },

  getCartQuantity() {
    return  this.ProductQuantity.asObservable();
  },
  // getCartQuantity() {
  //   return  (this.cart as any).reduce((acc:any, item:any) => acc + item.quantity, 0);
  // },

  getItemQuantity(item: any) {
    let index =  (this.cart as any).findIndex((i:any) => i.id === item.id);

    if (index !== -1) {
      return  (this.cart as any)[index].quantity;
    }

    return 0;
  },

  getProductStore(){
    return this.ProductStore.asObservable();
  },
  
  };
  export default CartService;

  
// class CartService {
//     private cart: any[] = [];
//     constructor() {
//       let cart = localStorage.getItem("cart");
//       if (cart) {
//         this.cart = JSON.parse(cart);
//       }
//     }
  
//     getCart() {
//       return this.cart;
//     }
  
//     saveCartToLocal() {
//       localStorage.setItem("cart", JSON.stringify(this.cart));
//     }
  
//     addToCart(item: any) {
//       let index = this.cart.findIndex((i) => i.id === item.id);
  
//       if (index === -1) {
//         this.cart.push({ ...item, quantity: 1 });
//       } else {
//         this.cart[index].quantity++;
//       }
  
//       this.saveCartToLocal();
//     }
  
//     removeItem(item: any) {
//       let index = this.cart.findIndex((i) => i.id === item.id);
  
//       if (index !== -1) {
//         if (this.cart[index].quantity !== 0) {
//           this.cart[index].quantity--;
//         } else {
//           this.cart.splice(index, 1);
//         }
//       }
  
//       this.saveCartToLocal();
//     }
  
//     getTotalPrice() {
//       return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     }
  
//     getCartQuantity() {
//       return this.cart.reduce((acc, item) => acc + item.quantity, 0);
//     }
  
//     getItemQuantity(item: any) {
//       let index = this.cart.findIndex((i) => i.id === item.id);
  
//       if (index !== -1) {
//         return this.cart[index].quantity;
//       }
  
//       return 0;
//     }
  
//   }

//   export default CartService