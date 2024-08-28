import { Component } from '@angular/core';
import { SharedService } from '../shared.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  total_quantity: any;
  constructor(private services: SharedService) { }
  ngOnInit() {
    this.total_quantity = this.services.getcartcount;
    this.services.selectedcartcount.subscribe(res =>{
      this.total_quantity = res;
    })
    // console.log(this.services.getcartcount);
  }

}
