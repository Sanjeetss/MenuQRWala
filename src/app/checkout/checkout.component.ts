import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  final_food: any;
  final_parcel: any = [];
  order_details: any[] = [];
  total_price: any = 0;
  ngOnInit() {
    // debugger;
    // console.log(localStorage.getItem('final_food'));
    if(localStorage.getItem('final_food')!== null && localStorage.getItem('final_food')!== '' && localStorage.getItem('final_food')!== undefined)
   { this.final_food = localStorage.getItem('final_food');
    this.final_parcel = JSON.parse(this.final_food); }

    for (var i = 0; i < this.final_parcel.length; i++) {
      var quantity = parseInt(this.final_parcel[i]['quantity']);
      var price = parseInt(this.final_parcel[i]['price']);

      this.order_details.push({
        id: this.final_parcel[i]['id'],
        name: this.final_parcel[i]['name'],
        price: (quantity * price),
        quantity: this.final_parcel[i]['quantity']
      });
    }

    for (i = 0; i < this.order_details.length; i++) {
      this.total_price += parseInt(this.order_details[i]['price'])
    }
  }
}
