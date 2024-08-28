import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SharedService } from './shared.service'
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mqw';

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'http://localhost:4200/login';

  showHead: boolean = false;

  constructor(private router: Router, private services: SharedService) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }
}
