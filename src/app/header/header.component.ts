import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
 menuValue:boolean=false;
 menuIcon:string ='bi bi-list';
 openMenu(){
    this.menuValue =! this.menuValue ;
    this.menuIcon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }
   closeMenu() {
    this.menuValue = false;
    this.menuIcon = 'bi bi-list';
  }
  switchToGerman() {
    this.menuValue = true;
  }
  switchToEnglish() {
    this.menuValue = false;
  }
  
}