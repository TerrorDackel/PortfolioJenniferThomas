import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-programm-box',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './programm-box.component.html',
  styleUrl: './programm-box.component.sass'
})
export class ProgrammBoxComponent {

}
