import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-ref',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './ref.component.html',
  styleUrl: './ref.component.sass'
})
export class RefComponent {

}
