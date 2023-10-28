import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() quote: string = 'soy una quote feisima y larguisima que no aporta nada';
  @Input() bkg: string = 'https://res.cloudinary.com/h7metrology/image/upload/v1698506217/web/bkg.jpg';
}
