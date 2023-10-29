import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variante',
  templateUrl: './variante.component.html',
  styleUrls: ['./variante.component.scss']
})
export class VarianteComponent {
  @Input() image: any;
  @Input() mainTitle: any;
  @Input() text: any;

}
