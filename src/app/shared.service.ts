import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private cartcount = new BehaviorSubject<string>('0');
  selectedcartcount = this.cartcount.asObservable();

  constructor(private fs: Firestore) { }

  setcartcount(year: string) {
    this.cartcount.next(year);
  }

  get getcartcount(): string {
    return this.cartcount.getValue();
  }

  fetchuserdata() {
    let user_data = collection(this.fs, 'userdetails');
    return collectionData(user_data);
  }

  addUserData(user_data: any) {
    let db_collection = collection(this.fs, 'userdetails');
    return addDoc(db_collection, user_data)
  }

  fetchfoodmenumaster() {
    let data = collection(this.fs, 'foodmenumaster');
    return collectionData(data);
  }

  addmasterdata() {
    // debugger;
    var starters = [
      {
        "id": "7",
        "name": "NonVeg Pulav",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Basmati Rice, Onion, Tomato,..",
        "price": "150",
        "type": "Starter",
        "isveg": "true"
      },
      {
        "id": "2",
        "name": "Pav Bhaji",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Tomato, Butter Pav",
        "price": "100",
        "type": "Starter",
        "isveg": "true"
      },
      {
        "id": "3",
        "name": "Burger",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "BunPav, Tomato, Aalu tikki, Cabage",
        "price": "80",
        "type": "Starter",
        "isveg": "true"
      },
      {
        "id": "4",
        "name": "Tava Pulav",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Basmati Rice, Tomato, Onion, Spices, Etc",
        "price": "120",
        "type": "Starter",
        "isveg": "true"
      },
      {
        "id": "5",
        "name": "Pizza",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Pizza base, Capsicum, Onion ,Tomato, Spices, Etc",
        "price": "200",
        "type": "Beverage",
        "isveg": "true"
      },
      {
        "id": "6",
        "name": "Tea",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Tea, Ginger, Milk",
        "price": "15",
        "type": "Beverage",
        "isveg": "true"
      },
      {
        "id": "8",
        "name": "Lemon Tea",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Lemon, tea",
        "price": "15",
        "type": "Beverage",
        "isveg": "true"
      },
      {
        "id": "9",
        "name": "Coffee",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Milk, Coffee",
        "price": "20",
        "type": "Beverage",
        "isveg": "true"
      },
      {
        "id": "10",
        "name": "French Fries",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Potato, Peri peri masala",
        "price": "50",
        "type": "Beverage",
        "isveg": "true"
      },
      {
        "id": "11",
        "name": "Chees Nuggets",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Chees, Corn",
        "price": "80",
        "type": "Appetizer",
        "isveg": "true"
      },
      {
        "id": "13",
        "name": "Cheese Cake",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Cheese, Cake",
        "price": "50",
        "type": "Appetizer",
        "isveg": "true"
      },
      {
        "id": "12",
        "name": "Ice Cream cup",
        "imagepath": "../../assets/images/pulao.jpg",
        "details": "Vanilla, Milk, Chocolate",
        "price": "20",
        "type": "Appetizer",
        "isveg": "true"
      }
    ]
    let db_collection = collection(this.fs, 'foodmenumaster');
    for (var i = 0; i < starters.length; i++) {
      addDoc(db_collection, starters[i])
    }
  }
}
