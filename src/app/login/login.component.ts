import { Component } from '@angular/core';
import { SharedService } from '../shared.service'
import { collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private services: SharedService) { }

  fetchUserData(){
    this.services.fetchuserdata().subscribe(resp => {
     console.log(resp)
    })
  }
  userdatasubmit(fname: any, lname: any, mobno: any){
    let user_data = {
      first_name: fname,
      last_name: lname,
      mobile_no: mobno
    };
    localStorage.setItem('user_name', fname + ' ' + lname);
    this.services.addUserData(user_data).then(resp => {
      // console.log(resp);
      this.fetchUserData();
      //this.services.addmasterdata();
    })
  }
}
