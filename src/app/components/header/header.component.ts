import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ClientName:string="mohamed";
  showDiv:boolean=false;
  showLogo:boolean=true;

  toggleLogoDiv(){
    this.showLogo=!this.showLogo;
    this.showDiv=!this.showDiv;
  }
}
