import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedService } from '../shared.service'

// import 'localstorage-polyfill'

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrl: './menucard.component.css'
})


export class MenucardComponent {

  public user_name: any;
  public fast_food: any[] = [];
  public beverage: any[] = [];
  public appetizer: any[] = [];
  public final_food: any = [];
  total_quantity: any;
  selectedcartcount: any;
  // @Output() public cartCount = new EventEmitter();

  constructor(private services: SharedService) { }

  ngOnInit() {
    this.user_name = localStorage.getItem('user_name');
    this.fetchfoodmenumaster();
    this.total_quantity = localStorage.getItem('total_quantity');
  }

  fetchfoodmenumaster() {
    this.services.fetchfoodmenumaster().subscribe(resp => {
      // var fast_food = resp.filter(function (val) {
      //   return val['type'] == "Fast Food";
      // });

      // var beverage = resp.filter(function (val) {
      //   return val['type'] == "Bevarage";
      // });

      // var appetizer = resp.filter(function (val) {
      //   return val['type'] == "Appetizer";
      // });
      for (var i = 0; i < resp.length; i++) {
        if (resp[i]['type'] == "Starter")
          this.fast_food.push(resp[i]);
        else if (resp[i]['type'] == "Beverage")
          this.beverage.push(resp[i]);
        else if (resp[i]['type'] == "Appetizer")
          this.appetizer.push(resp[i]);
      }
    })
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  @Input() quantity: any = 0; // Initial quantity
  @Input() maxQuantity: any = 10; // Maximum quantity allowed

  increment(id: any) {
    var quantity_elem = document.getElementById('quantity_' + id) as HTMLInputElement;
    var name_elem = document.getElementById('name_' + id) as HTMLInputElement;
    var price_elem = document.getElementById('price_' + id) as HTMLInputElement;
    var quantity_value = quantity_elem['value'];
    if (parseInt(quantity_value) < this.maxQuantity) {
      quantity_elem['value'] = (parseInt(quantity_value) + 1).toString();
      const objWithIdIndex = this.final_food.findIndex((obj: any) => obj.id === id);
      if (objWithIdIndex == -1) {
        this.final_food.push({
          id: id,
          name: name_elem['innerText'],
          price: price_elem['innerText'],
          quantity: quantity_elem['value']
        })
      }
      else {
        this.final_food[objWithIdIndex]['quantity'] = quantity_elem['value'];
      }
    }
    var total_quantity = 0;
    for (var i = 0; i < this.final_food.length; i++) {
      total_quantity += parseInt(this.final_food[i]['quantity'])
    }
    this.services.setcartcount(total_quantity.toString());
    // this.cartCount.emit(total_quantity.toString());

    this.services.selectedcartcount.subscribe(data => {

      this.selectedcartcount = total_quantity;
      // this.services.setcartcount(total_quantity.toString());
    });
    // selectedcartcount
  }
  decrement(id: any) {
    var document_elem = document.getElementById('quantity_' + id) as HTMLInputElement;
    var input_value = document_elem['value'];
    if (parseInt(input_value) > 0) {
      document_elem['value'] = (parseInt(input_value) - 1).toString();

      const objWithIdIndex = this.final_food.findIndex((obj: any) => obj.id === id);
      if (parseInt(input_value) > 1) {
        this.final_food[objWithIdIndex]['quantity'] = document_elem['value'];
      }
      else if (objWithIdIndex > -1) {
        this.final_food.splice(objWithIdIndex, 1);
      }
    }
    var total_quantity = 0;
    for (var i = 0; i < this.final_food.length; i++) {
      total_quantity += parseInt(this.final_food[i]['quantity'])
    }
    this.services.setcartcount(total_quantity.toString());
  }

  placeorder() {
    localStorage.setItem('final_food', JSON.stringify(this.final_food));
    var total_quantity = 0;
    for (var i = 0; i < this.final_food.length; i++) {
      total_quantity += parseInt(this.final_food[i]['quantity'])
    }
    localStorage.setItem("total_quantity", total_quantity.toString());
  }


}
